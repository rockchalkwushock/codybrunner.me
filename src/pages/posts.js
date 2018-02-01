/* eslint-disable no-undef */
// TODO: Add SEO, Styled Header for more fancy fancy
import React from 'react'

import { Card, FlexContainer, Grid, List } from '../components'

const PostsPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <FlexContainer>
      <Grid>
        <h1>Cody's Blog</h1>
        <List>
          {posts.map(({ node: post }) => (
            <Card key={post.fields.slug} post={post} />
          ))}
        </List>
      </Grid>
    </FlexContainer>
  )
}

// FIXME: Will need to add filter and possibly limit for pagination.
// Probably will need totalCount for pagination as well.
export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
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
  }
`

export default PostsPage
