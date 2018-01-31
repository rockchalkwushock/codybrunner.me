/* eslint-disable no-undef */
import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <h1>Hello Gatsby</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <Link key={post.fields.slug} to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}

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
        jobTitle
        market {
          href
          label
          text
        }
        social {
          className
          href
          label
        }
        siteAuthor
        siteCopyright
        siteDescription
        siteKeywords
        siteLang
        siteMenu {
          id
          href
          text
        }
        siteTitle
        siteUrl
      }
    }
  }
`

export default IndexPage
