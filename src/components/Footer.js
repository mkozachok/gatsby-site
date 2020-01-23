import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const tags = ["travel", "amsterdam"]
const categories = ["travel", "coding"]
export const Footer = () => (
  <footer>
    <article>
      Menu:{" "}
      {categories.map(c => (
        <Link
          key={c}
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
          key={t}
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
