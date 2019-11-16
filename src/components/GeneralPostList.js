import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export const GeneralPostList = ({ nodes }) =>
  nodes.map(({ node }) => (
    <div key={node.id}>
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        <span
          css={css`
            color: #bbb;
          `}
        >
          — {node.frontmatter.date}
        </span>
      </h3>
      <img
        src={
          node.frontmatter.previwImage &&
          node.frontmatter.previwImage.absolutePath
        }
      />
      {node.frontmatter.previewImage && (
        <img src={node.frontmatter.previewImage.publicURL} />
      )}
      <p>{node.frontmatter.description}</p>
      <p>
        <Link to={node.fields.slug}>Read more</Link>
      </p>
    </div>
  ))
