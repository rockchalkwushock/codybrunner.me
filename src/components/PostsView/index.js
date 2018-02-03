import React from 'react'

import { FlexContainer, Grid, List } from '../commons'
import Card from '../Card'
import SEO from '../SEO'

const PostsView = ({ posts, site }) => (
  <FlexContainer>
    <SEO site={site} />
    <Grid alternate>
      <h1>Cody's Blog</h1>
      <List>
        {posts.map(({ node: post }) => (
          <Card key={post.fields.slug} post={post} />
        ))}
      </List>
    </Grid>
  </FlexContainer>
)

export default PostsView
