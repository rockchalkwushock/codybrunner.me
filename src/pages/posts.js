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
 * REVIEW
 * Will need to likely include `totalCount` & provide a `limit`
 * for implementing pagination on this page. Not enough posts at
 * this point in time to add this feature.
 *
 * TODO: Styled Header for more fancy fancy, like a background img header?
 */

const PostsPage = ({ data }) => (
  <PostsView
    posts={data.allMarkdownRemark.edges}
    site={data.site.siteMetadata}
  />
)

export const PostsPageQuery = graphql`
  query PostsPageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { ne: "/about/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            draft
            tags
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        author
        copyright
        description
        keywords
        lang
        title
        twitter
        url
      }
    }
  }
`

export default PostsPage
