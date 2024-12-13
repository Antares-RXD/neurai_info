// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Neurai',
  tagline: 'Technical documentation about neurai',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://neurai.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Antares-RXD', // Usually your GitHub org/user name.
  projectName: 'neurai_info', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/neurai-new-header.png',
      announcementBar: {
        id: 'support_us',
        content:
          'Oficial website <a target="_blank" rel="noopener noreferrer" href="https://neurai.org">Neurai.org</a>',
        backgroundColor: '#000000',
        textColor: '#eeeeee',
        isCloseable: true,
      },
      navbar: {
        title: 'Neurai',
        logo: {
          alt: 'Neurai.info',
          src: 'img/logo.png',
        },
        
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Introduction',
          },
          {
            href: 'https://github.com/neuraicommunity/neurai_info',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
        metadata: [
    {
      name: 'google-font',
      content: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
  ],
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/neuraiproject',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/dxJSrSeXjF',
              },
              {
                label: 'X',
                href: 'https://x.com/neuraiproject',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/NeuraiProject',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neurai.org`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
