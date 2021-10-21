import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="container-404 text-primary">
      <div className="content-404 markdown">
        <h1>NOT FOUND</h1>
        <h2>You just hit a route that doesn&#39;t exist... the sadness.</h2>
        <h4>
          If there should be a page here, let me know by opening an issue at
          this project's{" "}
          <a
            className="link"
            href="https://github.com/InfernoCoder11/personal-blog"
          >
            github repo
          </a>
        </h4>
      </div>
      <div className="info-nav in-row">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/tags/" className="link">
          All tags
        </Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
