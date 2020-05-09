import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Header from "../components/header"
import "../css/markdown.css"

export default function Template({ data }) {
  const { mdx: post } = data
  return (
    <div className="markdown-container">
      <Header siteTitle="Inferno's Blog" />
      <div className="markdown markdown-content">
        <h1>{post.frontmatter.title}</h1>
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
      }
    }
  }
`
