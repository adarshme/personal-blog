import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import "../css/markdown.css"
import Img from "gatsby-image"
import { parseDate } from "../helpers"

export default function Template({ data, pageContext }) {
  const {
    mdx: post,
    site: {
      siteMetadata: { title },
    },
  } = data
  const { next, prev } = pageContext
  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Header siteTitle={title} />
      <div className="markdown-container bg-color-sec">
        <Img
          className="cover-image"
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <div className="markdown markdown-content mt-4 mb-2 bg-color-pri">
          <h1>{post.frontmatter.title}</h1>
          <ul className="tags-list mark">
            {post.frontmatter.tags.map(tag => (
              <Link
                to={`/tags/${tag}/`}
                key={tag}
                className="tag mark rounded-full p-1"
              >
                {tag}
              </Link>
            ))}
          </ul>
          <h6>{parseDate(post.frontmatter.date)}</h6>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <div className="info-nav in-row text-primary mb-2">
          {next && (
            <Link to={next.frontmatter.path} className="link">
              Previous
            </Link>
          )}
          <Link to="/tags/" className="link">
            All tags
          </Link>
          <Link to="/" className="link">
            Home
          </Link>
          {prev && (
            <Link to={prev.frontmatter.path} className="link">
              Next
            </Link>
          )}
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
        tags
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
