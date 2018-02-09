/* eslint-disable no-undef */
import React from 'react'

import { CertsView } from '../components'

const CertsTemplate = ({ data }) => (
  <CertsView certs={data.allImageSharp.edges} meta={data.site.siteMetadata} />
)

export const pageQuery = graphql`
  query CertsPageQuery {
    allImageSharp(filter: { id: { regex: "/certs/" } }) {
      edges {
        node {
          parent {
            __typename
            ... on File {
              name
            }
          }
          resolutions(quality: 70, width: 275) {
            ...GatsbyImageSharpResolutions_withWebp_noBase64
          }
        }
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

export default CertsTemplate
