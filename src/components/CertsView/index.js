import React from 'react'

import { mergeStrings } from '../../lib/helpers'
import { Heading, Image } from '../commons'
import { CertsFlexContainer, CertsGrid } from './elements'
import SEO from '../SEO'

const CertsView = ({ certs, meta }) => {
  const updatedMeta = {
    ...meta,
    description: "Cody's earned certifications.",
    keywords: mergeStrings(
      meta.keywords,
      'tech certifications, Udemy, certified'
    ),
    title: 'Cody Brunner - Certifications'
  }
  return (
    <CertsFlexContainer>
      <SEO site={updatedMeta} />
      <Heading>Cody's Certs</Heading>
      <CertsGrid alternate>
        {certs.map(({ node }) => (
          <Image
            alt={node.parent.name}
            cert
            key={node.parent.name}
            resolutions={node.resolutions}
            title={node.parent.name}
          />
        ))}
      </CertsGrid>
    </CertsFlexContainer>
  )
}

export default CertsView
