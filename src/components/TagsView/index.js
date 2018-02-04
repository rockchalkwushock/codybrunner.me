import React from 'react'

import { FlexContainer, Grid, Link, List, Tag } from '../commons'
import { sortedTags } from '../../lib/helpers'

/**
 * @fileOverview
 * Tags Page View
 *
 * Accepts array of tags from GraphQL Query.
 * Ternary expression is really not needed,
 * but I will keep it in the off chance Gatsby
 * has an internal error fetching the data.
 *
 * FIXME: Come up with a better display than this, it's garbage
 */

const Tags = ({ tags }) =>
  tags ? (
    <FlexContainer>
      <Grid>
        <h1>Tags</h1>
        <List tags>{sortedTags(tags, <Tag />)}</List>
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

export default Tags
