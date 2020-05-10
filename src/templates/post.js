import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Header from "../components/header"
import "../css/markdown.css"
import Img from "gatsby-image"
import { parseDate } from "../helpers"

export default function Template({ data }) {
  const { mdx: post } = data
  return (
    <div className="markdown-container bg-gray-100">
      <Header siteTitle="Inferno's Blog" />
      <div className="markdown markdown-content">
        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        <h1>{post.frontmatter.title}</h1>
        <h6>{parseDate(post.frontmatter.date)}</h6>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
