import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blockchain forever',
    description: (
      <>
        <li> Robust and proven code.</li>
        <li> PoW for good distribution.</li>
        <li> ASIC resistant to avoid mining centralization.</li>
        <li> Assets in Layer 1.</li>
      </>
    ),
  },
  {
    title: 'Decentralized IoT',
    description: (
      <>
        <li> Optimized for ESP32 based equipment.</li>
        <li> Distributed nodes for low latency access.</li>
        <li> Unique identifiers to assign to IoT.</li>
        <li> Future upgrade to RISC-V equipment.</li>
      </>
    ),
  },
  {
    title: 'For developers',
    description: (
      <>
        <li> Documentation for getting started in Neurai development.</li>
        <li> Free software in the community guithub.</li>
        <li> Access to courses to learn python, esp32 and others.</li>
        <li> Prizes for developers.</li>
      </>
    ),
  },
  {
    title: 'Free designs',
    description: (
      <>
        <li> Free IoT board designs.</li>
        <li> Guides to use KiCad for design creation.</li>
        <li> All designs created in Neurai will be Open Source.</li>
        <li> Prizes for designers.</li>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6' , styles.featureItem)}>
      <div className="text--center">
      </div>
      <div className="text--left padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      
      <div className="container" style={{ width: '100%', maxWidth: '100%' }}>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

