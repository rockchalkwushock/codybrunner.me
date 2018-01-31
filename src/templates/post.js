/* eslint-disable no-undef, react/no-danger */
import React from 'react'

const PostTemplate = ({ data }) => {
  const { html } = data.markdownRemark
  console.log(data)
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

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
