/* eslint-disable no-undef, react/no-danger */
import React from 'react'

import { SinglePost } from '../components'

const PostTemplate = ({ data, pathContext }) => (
  <SinglePost
    ctx={pathContext}
    meta={data.site.siteMetadata}
    post={data.markdownRemark}
  />
)

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        draft
        keywords
        tags
        title
      }
      html
      timeToRead
      wordCount {
        words
      }
    }
    site {
      siteMetadata {
        author
        copyright
        description
        disqusShortname
        keywords
        lang
        siteUrl
        title
        twitter
      }
    }
  }
`

export default PostTemplate
