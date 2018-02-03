import React from 'react'

import Card from '../Card'
import { FlexContainer, Grid, List, Link } from '../commons'

const Term = ({ tag, taggedPosts }) =>
  taggedPosts ? (
    <FlexContainer>
      <Grid alternate>
        <h1>
          {taggedPosts.length} post{taggedPosts.length === 1 ? '' : 's'} tagged
          with {tag}
        </h1>
        <List gap={20}>
          {taggedPosts.map(post => <Card key={post.fields.slug} post={post} />)}
        </List>
      </Grid>
    </FlexContainer>
  ) : (
    <FlexContainer>
      <Grid>
        <p>Whoa warrior, woah! How did you do that? Maybe go home okay.</p>
        <Link href="/" text="Go back home" />
      </Grid>
    </FlexContainer>
  )

export default Term
