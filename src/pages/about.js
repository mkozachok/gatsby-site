import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
