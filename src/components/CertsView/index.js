import React from 'react'

import { mergeStrings } from '../../lib/helpers'
import { Heading } from '../commons'
import { CertImage, CertsFlexContainer, CertsGrid } from './elements'
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
        {certs.map(({ node: cert }) => (
          <CertImage
            alt={cert.parent.name}
            key={cert.parent.name}
            resolutions={cert.resolutions}
            title={cert.parent.name}
          />
        ))}
      </CertsGrid>
    </CertsFlexContainer>
  )
}

export default CertsView
