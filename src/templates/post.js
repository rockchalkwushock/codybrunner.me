/* eslint-disable no-undef, react/no-danger */
import React from 'react'

import { Post } from '../components'

const PostTemplate = ({ data }) => (
  <Post post={data.markdownRemark} site={data.site} />
)

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        draft
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
        siteUrl
      }
    }
  }
`

export default PostTemplate
