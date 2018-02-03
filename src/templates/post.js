/* eslint-disable no-undef, react/no-danger */
import React from 'react'

import { SinglePost } from '../components'

const PostTemplate = ({ data }) => (
  <SinglePost meta={data.site.siteMetadata} post={data.markdownRemark} />
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
        title
        twitter
        url
      }
    }
  }
`

export default PostTemplate
