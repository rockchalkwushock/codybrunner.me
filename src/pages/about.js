/* eslint-disable no-undef */
import React from 'react'

import { AboutView } from '../components'

/**
 * @fileOverview
 * Site About Page
 *
 * Calls AboutPageQuery
 * Only looks for slug '/about/'
 */

const AboutPage = ({ data }) => (
  <AboutView
    content={data.markdownRemark}
    meta={data.site.siteMetadata}
    modTime={data.file.modifiedTime}
  />
)

export const pageQuery = graphql`
  query AboutPageQuery {
    file {
      modifiedTime(formatString: "MMMM DD, YYYY")
    }
    markdownRemark(fields: { slug: { eq: "/about/" } }) {
      fields {
        slug
      }
      frontmatter {
        description
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

export default AboutPage
