import React from "react"
import PropTypes from "prop-types"
// Utilities
// import kebabCase from "lodash/kebabCase"
// Components
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <SEO title="Tags" />
    <div>
      <Header siteTitle={title} />
      <div className="tags-container">
        <ul className="tags-list">
          {group.map(tag => (
            <Link
              to={`/tags/${tag.fieldValue}/`}
              key={tag.fieldValue}
              className="tag rounded-full p-1"
            >
              {tag.fieldValue}
            </Link>
          ))}
        </ul>
        <div className="info-nav padding-top-6px">
          <Link to="/" className="link">
            Home
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  </div>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
