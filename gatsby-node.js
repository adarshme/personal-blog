/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  return graphql(`
    {
      posts: allMdx {
        edges {
          node {
            body
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.path}`,
        component: postTemplate,
      })
    })
    res.data.tagsGroup.group.forEach(tag => {
      createPage({
        path: `/tags/${tag.fieldValue}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  })
}
