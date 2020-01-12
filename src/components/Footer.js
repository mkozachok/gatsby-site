import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const tags = ["travel", "amsterdam"]
const categories = ["travel", "coding"]
export default () => (
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
