import React from "react"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-black-500">Hello World!</h1>
    {data.allMdx.edges.map(post => (
      <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(limit: 10) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
