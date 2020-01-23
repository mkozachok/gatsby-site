import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GeneralPostList } from "../components/GeneralPostList"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <GeneralPostList nodes={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            previewImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
