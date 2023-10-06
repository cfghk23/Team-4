import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Link to={`/login_page`} className="btn btn-primary mr-3">
            For Students
          </Link>
          <Link to={`/login_page`} className="btn btn-primary">
            For Teachers
          </Link>
        </div>
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
      <main>
        <Row className="p-5">
          <Col>
            <img
src="https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg"              style={{ width: "500px", height: "400px" }}
            />
            <h4>Early financial education empowers kids.</h4>
          </Col>
          <Col>
            <img
              src="https://i.pinimg.com/564x/8b/da/d5/8bdad513adb8b008cdd4fd00b1a24ad6.jpg"
              style={{ width: "500px", height: "400px" }}
            />
            <h4>Money skills secure their future.</h4>
          </Col>
          <Col>
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              style={{ width: "500px", height: "400px" }}
            />
            <h4>Home talks build financial foundations.</h4>
          </Col>
        </Row>
      </main>
    </Layout>
  );
}