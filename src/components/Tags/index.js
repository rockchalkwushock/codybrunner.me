import React from 'react'

import { FlexContainer, Grid, Link } from '../commons'

// TODO: Need to create ternary in the event no tags exist which would be like wtf?
// TODO: Styling

const Tags = ({ tags }) => (
  <FlexContainer>
    <Grid>
      <h1>Blog Tags</h1>
      {tags.map(tag => <Link href={`/tags/${tag}`} key={tag} text={tag} />)}
    </Grid>
  </FlexContainer>
)

export default Tags
