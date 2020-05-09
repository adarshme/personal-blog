import React from "react"
import Helmet from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Template({ data }) {
  const { mdx: post } = data
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
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
