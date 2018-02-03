/* eslint-disable no-undef */
// TODO: Styled Header for more fancy fancy
import React from 'react'

import { PostsView } from '../components'

const PostsPage = ({ data }) => (
  <PostsView
    posts={data.allMarkdownRemark.edges}
    site={data.site.siteMetadata}
  />
)

// FIXME: Will need to add filter and possibly limit for pagination.
// Probably will need totalCount for pagination as well.
export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { ne: "/about/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
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
