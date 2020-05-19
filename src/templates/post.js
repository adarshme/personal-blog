import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import "../css/markdown.css"
import Img from "gatsby-image"
import { parseDate } from "../helpers"

export default function Template({ data }) {
  const {
    mdx: post,
    site: {
      siteMetadata: { title },
    },
  } = data
  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Header siteTitle={title} />
      <div className="markdown-container">
        <Img
          className="cover-image"
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <div className="markdown markdown-content mt-4 mb-2">
          <h1>{post.frontmatter.title}</h1>
          <h6>{parseDate(post.frontmatter.date)}</h6>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <Footer />
      </div>
    </>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 900, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
