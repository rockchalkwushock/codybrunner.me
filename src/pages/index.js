/* eslint-disable no-undef */
import React from 'react'

import {
  Card,
  FlexContainer,
  Grid,
  Icon,
  Link,
  List,
  ProfilePic
} from '../components'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { jobTitle, market, social, siteAuthor } = data.site.siteMetadata
  return (
    <FlexContainer>
      <Grid>
        <ProfilePic />
        <h2>{siteAuthor}</h2>
        <h4>{jobTitle}</h4>
        <List flow>
          {social.map(s => (
            <Link ext href={s.href} key={s.label}>
              <Icon className={s.className} />
            </Link>
          ))}
        </List>
        <List flow space>
          {market.map(m => (
            <Link ext href={m.href} key={m.label} text={m.text} />
          ))}
        </List>
      </Grid>
      <Grid>
        <h1>Recent Posts</h1>
        <List>
          {posts.map(({ node: post }) => (
            <Card key={post.fields.slug} post={post} />
          ))}
        </List>
      </Grid>
    </FlexContainer>
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
