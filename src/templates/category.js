import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GeneralPostList } from "../components/GeneralPostList"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { category } = pageContext
  return (
    <Layout location={location} title={`Posts in category "${category}"`}>
      <div className="category-container">
        <SEO title={`Posts in category "${category}"`} />
        <div>
          <h2>Category: {category}</h2>
          <GeneralPostList nodes={data.allMarkdownRemark.edges} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            previewImage {
              publicURL
            }
            description
          }
        }
      }
    }
  }
`

export default CategoryTemplate
