/* eslint-disable no-undef */
import React from 'react'

import { HomeView } from '../components'

const HomeTemplate = ({ data, pathContext }) => (
  <HomeView
    meta={data.site.siteMetadata}
    posts={pathContext.posts}
    profilePic={data.profilePic.sizes}
  />
)

export const homeQuery = graphql`
  query HomePageQuery {
    profilePic: imageSharp(id: { regex: "/profile_pic/" }) {
      sizes(maxHeight: 200, maxWidth: 200, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
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
