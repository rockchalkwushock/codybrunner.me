import React from 'react'

import { FlexContainer, Grid, Link } from '../commons'

// TODO: Styling

const Tags = ({ tags }) =>
  tags ? (
    <FlexContainer>
      <Grid>
        <h1>Blog Tags</h1>
        {tags.map(tag => <Link href={`/tags/${tag}`} key={tag} text={tag} />)}
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
