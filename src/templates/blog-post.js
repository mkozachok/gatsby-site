import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Header = styled.header`
  text-align: center;
  padding: 36px 0;
  h1 {
    font-weight: 600;
  }
  p {
    color: #777;
    font-size: 14px;
  }
`

export default ({ data }) => {
  const {
    frontmatter: { title, date },
    html,
  } = data.markdownRemark
  return (
    <Layout>
      <SEO title={title} description={title} />
      <div>
        <Header>
          <h1>{title}</h1>
          <p>{date}</p>
        </Header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
