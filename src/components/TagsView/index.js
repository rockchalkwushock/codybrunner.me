import React from 'react'

import { FlexContainer, Grid, Link, Tag } from '../commons'
import { sortedTags } from '../../lib/helpers'

// TODO: Styling
const Tags = ({ tags }) =>
  tags ? (
    <FlexContainer>
      <Grid>
        <h1>Tags</h1>
        {sortedTags(tags, <Tag />)}
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
