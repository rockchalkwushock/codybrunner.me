import React from 'react'

import Card from '../Card'
import { FlexContainer, Grid, List, Link } from '../commons'

/**
 * @fileOverview
 * Individual Tag Page View
 *
 * Accepts the selected tag & corresponding posts
 * from the GraphQL Query.
 * Ternary expression is really not needed,
 * but I will keep it in the off chance Gatsby
 * has an internal error fetching the data.
 */

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
