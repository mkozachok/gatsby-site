import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export const GeneralPostList = ({ nodes }) =>
  nodes.map(({ node }) => (
    <div key={node.id}>
      <Link
        className="preview-title"
        css={css`
          color: red;
          margin-bottom: ${rhythm(1 / 4)};
        `}
        to={node.fields.slug}
      >
        {node.frontmatter.title}
      </Link>
      <span
        css={css`
          color: #bbb;
        `}
      >
        <p className="preview-date">{node.frontmatter.date}</p>
      </span>
      {!!node.frontmatter.previewImage && (
        <img src={node.frontmatter.previewImage.publicURL} />
      )}
      <p>{node.frontmatter.description}</p>
      <p>
        <Link to={node.fields.slug}>Read more </Link>
      </p>
    </div>
  ))
