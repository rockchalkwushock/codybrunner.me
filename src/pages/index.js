/* eslint-disable no-undef */
import React from 'react'

import { HomeView } from '../components'

const IndexPage = ({ data }) => (
  <HomeView
    meta={data.site.siteMetadata}
    posts={data.allMarkdownRemark.edges}
  />
)

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
        googleVerify
        jobTitle
        keywords
        lang
        market {
          href
          label
          text
        }
        menu {
          id
          href
          text
        }
        social {
          className
          href
          label
        }
        title
        twitter
        url
      }
    }
  }
`

export default IndexPage
