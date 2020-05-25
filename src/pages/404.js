import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="container-404 text-primary">
      <div className="content-404 markdown">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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
)

export default NotFoundPage
