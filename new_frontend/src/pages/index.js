import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <Button className='m-2'>For Students</Button>
        <Button className='m-2'>For Teachers</Button>
        
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main >
        <Row className="p-4">
          <Col>
            <img src="https://i.pinimg.com/originals/48/93/c2/4893c2e62865ad38307dc554018101a5.jpg" style={{ width: '500px', height: '400px' }} />
            <h4 >
            Early financial education empowers kids.
            </h4>
          </Col>
          <Col>
            <img src="https://i.pinimg.com/564x/8b/da/d5/8bdad513adb8b008cdd4fd00b1a24ad6.jpg" style={{ width: '500px', height: '400px' }} />
            <h4>
            Money skills secure their future.
            </h4>
          </Col>
          <Col>
            <img src="https://i.pinimg.com/564x/b1/93/51/b19351463a92831db196f5e09c2cd448.jpg" style={{ width: '500px', height: '400px' }} />
            <h4>
            Home talks build financial foundations.
            </h4>
          </Col>
        </Row>
      </main>
    </Layout>
  );
}