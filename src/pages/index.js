import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Partners from '@site/src/components/Partners';
import Tech from '@site/src/components/Tech';
import Arch from '@site/src/components/Architecture';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        <Heading as="h1special" className="hero__title">
            {siteConfig.title}
        </Heading>

       
         <p className="hero__subtitle">{siteConfig.tagline}</p> 
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/introduction">
            Start here
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Connecting the real world with blockchain.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Partners />
        <Arch />
      </main>
    </Layout>
  );
}
