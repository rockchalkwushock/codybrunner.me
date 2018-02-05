/* eslint-disable no-undef */
import React from 'react'

import { HomeView } from '../components'

const HomeTemplate = ({ data, pathContext }) => (
  <HomeView meta={data.site.siteMetadata} posts={pathContext.posts} />
)

export const homeQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        aboutSnippet
        author
        business {
          className
          href
          label
        }
        contacts {
          className
          href
          label
        }
        copyright
        description
        employment
        googleVerify
        jobTitle
        keywords
        lang
        menu {
          id
          href
          text
        }
        siteUrl
        title
        twitter
      }
    }
  }
`

export default HomeTemplate
