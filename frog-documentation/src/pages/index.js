import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/docOverview">
            Explore What FROG Has to Offer
          </Link>
        </div>
        <div>
        <h1>
            We Know Furniture Retail
        </h1>
        </div>
        <div>
        <>
        Our Mission is to create easy to use, reliable, innovative and cost-effective methods that allow Home Furnishings Retailers to operate more efficiently.

        The team has been providing the furniture retail industry with high-quality hardware and furniture software solutions since 1987! Our executive staff started in the furniture industry, and with over 145 years of combined industry experience, we know exactly how to tailor our system to suit your needs, for a fraction of what our competitors charge.

        Headquartered in Fair Oaks, California we also have a support office in Denver, North Carolina to provide you with the support you need no matter your location. With FROG, a developer is always involved with your support. This gives us the ability to provide a quick turnaround for your support needs.
        </>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`The Future of Furniture Retail: ${siteConfig.title}`}
      description="FURNITURE RETAIL OPERATIONS GROUP">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
