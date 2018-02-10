/* eslint-disable no-undef */
import React from 'react'

import { NotFoundView } from '../components'

const NotFoundTemplate = ({ data }) => (
  <NotFoundView meme={data.meme.resolutions} meta={data.site.siteMetadata} />
)

export const pageQuery = graphql`
  query NotFoundPageQuery {
    meme: imageSharp(id: { regex: "/404-meme/" }) {
      resolutions(quality: 70, width: 400) {
        ...GatsbyImageSharpResolutions_withWebp_noBase64
      }
    }
    site {
      siteMetadata {
        author
        copyright
        description
        keywords
        lang
        siteUrl
        title
      }
    }
  }
`

export default NotFoundTemplate
