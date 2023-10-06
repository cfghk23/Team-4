import React from "react";
import { Link } from "react-router-dom";
import Layout from "@theme/Layout";

const coursevideo = () => {
  return (
    <Layout>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4">
        <iframe
          id="Geeks3"
          width="450"
          height="350"
          src="https://www.youtube.com/embed/V5he1JXiQbg?autoplay=1"
          frameBorder="0"
          allowFullScreen
          className="mx-auto my-3"
        ></iframe>
        <div className="mt-4">
          <Link to={`/game`} className="btn btn-primary">
            Play Game
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default coursevideo;
