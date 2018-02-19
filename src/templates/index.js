/* eslint-disable no-undef */
import React from 'react'

import { HomeView } from '../components'

const HomeTemplate = ({ data, pathContext }) => (
  <HomeView
    meta={data.site.siteMetadata}
    posts={pathContext.posts}
    profilePic={data.profilePic.sizes}
    projectPic={data.projectPic.resolutions}
    techIcons={data.techIcons.edges}
  />
)

export const homeQuery = graphql`
  query HomePageQuery {
    profilePic: imageSharp(id: { regex: "/profile_pic/" }) {
      sizes(maxHeight: 200, maxWidth: 200, quality: 90) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    projectPic: imageSharp(id: { regex: "/projects/mashaeltsova/" }) {
      resolutions(quality: 80, width: 300) {
        ...GatsbyImageSharpResolutions_withWebp_noBase64
      }
    }
    techIcons: allFile(
      filter: { dir: { regex: "/svgIcons/" }, name: { ne: ".DS_Store" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          name
          relativePath
        }
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
        tech
        title
        twitter
      }
    }
  }
`

export default HomeTemplate
