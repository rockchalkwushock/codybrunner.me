/* eslint-disable no-undef */
import React from 'react'

import { AboutView } from '../components'

// FIXME: wordCount not possible on backend, find a way

const AboutTemplate = ({ data, pathContext }) => (
  <AboutView
    content={pathContext.content[0].node}
    meta={data.site.siteMetadata}
    modTime={data.file.modifiedTime}
  />
)

export const pageQuery = graphql`
  query AboutPageQuery {
    file {
      modifiedTime(formatString: "MMMM DD, YYYY")
    }
    site {
      siteMetadata {
        author
        copyright
        description
        keywords
        lang
        siteUrl
        title
        twitter
      }
    }
  }
`

export default AboutTemplate
