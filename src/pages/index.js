import React from "react";
import Layout from "../components/layout";
//import Image from "../components/image"
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import Card from "../components/card";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="latestBlogPosts">
      {data.allMdx.edges.map((post) => (
        <Card
          key={post.node.id}
          to={post.node.frontmatter.path}
          title={post.node.frontmatter.title}
          image={post.node.frontmatter.thumbnail.childImageSharp.fluid}
          date={post.node.frontmatter.date}
        />
      ))}
    </div>
    <div className="info-nav text-primary">
      <Link to="/tags" className="link">
        All tags
      </Link>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      limit: 10
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
`;

export default IndexPage;
