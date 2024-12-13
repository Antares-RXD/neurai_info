import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'PoW para desarrolladores',
    description: (
      <>
        <li> Optimized file format that reduces the number and size of I/O requests.</li>
        <li> Smart I/O scheduling that maximizes throughput.</li>
        <li> Written in Rust, no GC, vectorized processing, and SIMD included.</li>
        <li> Powered by tantivy, the fastest search engine library.</li>
      </>
    ),
  },
  {
    title: 'IoT descentralizado',
    description: (
      <>
        <li> Optimized file format that reduces the number and size of I/O requests.</li>
        <li> Smart I/O scheduling that maximizes throughput.</li>
        <li> Written in Rust, no GC, vectorized processing, and SIMD included.</li>
        <li> Powered by tantivy, the fastest search engine library.</li>
      </>
    ),
  },
  {
    title: 'Diseños libres',
    description: (
      <>
        <li> Optimized file format that reduces the number and size of I/O requests.</li>
        <li> Smart I/O scheduling that maximizes throughput.</li>
        <li> Written in Rust, no GC, vectorized processing, and SIMD included.</li>
        <li> Powered by tantivy, the fastest search engine library.</li>
      </>
    ),
  },
  {
    title: 'Diseños libres',
    description: (
      <>
        <li> Optimized file format that reduces the number and size of I/O requests.</li>
        <li> Smart I/O scheduling that maximizes throughput.</li>
        <li> Written in Rust, no GC, vectorized processing, and SIMD included.</li>
        <li> Powered by tantivy, the fastest search engine library.</li>
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

