import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GeneralPostList } from "../components/GeneralPostList"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { tag } = pageContext
  return (
    <Layout location={location} title={`Posts in tag "${tag}"`}>
      <div className="tag-container">
        <SEO title={`Posts in tag "${tag}"`} />
        <div>
          <h2>Tag: {tag}</h2>
          <GeneralPostList nodes={data.allMarkdownRemark.edges} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            tags
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            previewImage {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default CategoryTemplate
