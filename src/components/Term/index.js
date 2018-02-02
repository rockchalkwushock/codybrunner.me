import React from 'react'

import Card from '../Card'
import FlexContainer from '../FlexContainer'
import Grid from '../Grid'
import List from '../List'

// TODO: Need to create ternary in the event no posts exist for term, etc.

const Term = ({ tag, taggedPosts }) => (
  <FlexContainer>
    <Grid alternate>
      <h1>
        {taggedPosts.length} post{taggedPosts.length === 1 ? '' : 's'} tagged
        with {tag}
      </h1>
      <List>
        {taggedPosts.map(post => <Card key={post.fields.slug} post={post} />)}
      </List>
    </Grid>
  </FlexContainer>
)

export default Term
