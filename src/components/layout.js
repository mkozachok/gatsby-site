import React from "react"
import { css } from "@emotion/core"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const Main = styled.main`
  margin: 0 auto;
  max-width: 768px;
  padding-top: 24px;
`

const tags = ["travel", "amsterdam"]
const categories = ["travel", "coding"]

const Footer = () => (
  <footer>
    <article>
      Menu:{" "}
      {categories.map(c => (
        <Link
          css={css`
            margin-right: 5px;
          `}
          to={`/category/${c}`}
        >
          {c}
        </Link>
      ))}
    </article>
    <article>
      Tags:{" "}
      {tags.map(t => (
        <Link
          css={css`
            margin-right: 5px;
          `}
          to={`/tags/${t}`}
        >
          {t}
        </Link>
      ))}
    </article>
  </footer>
)

export default ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Main>
      <Link to={`/`}>
        <h1
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {title}
        </h1>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
      <Footer />
    </Main>
  )
}
