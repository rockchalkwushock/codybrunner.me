import React from 'react'

import { FlexContainer, Grid, Image, Link, Text } from '../commons'
import { mergeStrings } from '../../lib/helpers'
import SEO from '../SEO'

const NotFoundView = ({ meta, meme }) => {
  const updatedMeta = {
    ...meta,
    description: "You got lost didn't you?",
    keywords: mergeStrings(meta.keywords, '404'),
    title: 'Lost in space?'
  }
  return (
    <FlexContainer>
      <SEO site={updatedMeta} />
      <Grid alternate>
        <Image
          alt="Darth Vader Meme"
          cert
          resolutions={meme}
          title="Darth Vader Meme"
        />
        <Text>
          Woah warrior, Woah! You shouldn't be here...NSA is watching, maybe go
          home okay?
        </Text>
        <Link href="/" text="Go back home" />
      </Grid>
    </FlexContainer>
  )
}

export default NotFoundView
