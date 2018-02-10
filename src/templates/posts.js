/* eslint-disable no-undef */
import React from 'react'

import { PostsView } from '../components'

/**
 * @fileOverview
 * Site Posts Page
 *
 * Calls PostsPageQuery
 * Filters out '/about/' slug
 * `draft` is part of query for alt-css
 * so I can see what is still considered
 * a draft before publishing and running
 * in produciton.
 *
 * TODO: Styled Header for more fancy fancy, like a background img header?
 */

const PostsTemplate = ({ data, pathContext }) => (
  <PostsView ctx={pathContext} meta={data.site.siteMetadata} />
)

export const PostsPageQuery = graphql`
  query PostsPageQuery {
    site {
      siteMetadata {
        author
        copyright
        description
        keywords
        lang
        siteUrl
        title
      }
    }
  }
`

export default PostsTemplate
