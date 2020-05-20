import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"

// Components
import { Link, graphql } from "gatsby"
import Card from "../components/card"
import Header from "../components/header"
import Footer from "../components/footer"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <>
      <SEO title={`Tag - ${tag}`} />
      <div className="tag-blogs-container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className="container-box"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            // padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <div className="latestBlogPosts">
            {edges.map(({ node }) => {
              return (
                <Card
                  key={node.id}
                  to={node.frontmatter.path}
                  title={node.frontmatter.title}
                  image={node.frontmatter.thumbnail.childImageSharp.fluid}
                  date={node.frontmatter.date}
                />
              )
            })}
          </div>
        </div>
        {/* <h1>{tagHeader}</h1>
        <Link to="/tags">All tags</Link> */}
        <Footer />
      </div>
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 250, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
