/* eslint-disable no-undef */
import React from 'react'

import { HomeView } from '../components'

/**
 * @fileOverview
 * Site Home Page
 *
 * Calls HomePageQuery
 * Filters out '/about/' slug
 * `draft` is part of query for alt-css
 * so I can see what is still considered
 * a draft before publishing and running
 * in produciton.
 */

const IndexPage = ({ data }) => (
  <HomeView
    meta={data.site.siteMetadata}
    posts={data.allMarkdownRemark.edges}
  />
)

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { ne: "/about/" } } }
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
        title
        twitter
        url
      }
    }
  }
`

export default IndexPage
