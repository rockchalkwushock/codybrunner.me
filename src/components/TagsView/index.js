import React from 'react'

import { FlexContainer, Grid, Link, List, Tag } from '../commons'
import { sortedTags } from '../../lib/helpers'

// FIXME: Come up with a better display than this, it's garbage
// It also let's the footer jump up.
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
