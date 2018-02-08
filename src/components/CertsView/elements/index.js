import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { number, shape, string } from 'prop-types'

import { FlexContainer, Grid } from '../../commons'

const CertsFlexContainer = FlexContainer.extend`
  align-items: unset;
  text-align: center;
`

const CertsGrid = Grid.extend`
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
`

const UnstyledImage = props => <Img {...props} />

const CertImage = styled(UnstyledImage)`
  border-radius: ${({ theme }) => theme.site.borderRadius};
  box-shadow: ${({ theme }) => theme.site.shadow};
`

CertsFlexContainer.displayName = 'CertsFlexContainer'
CertsGrid.displayName = 'CertsGrid'
CertImage.displayName = 'CertImage'
CertImage.propTypes = {
  alt: string.isRequired,
  resolutions: shape({
    height: number,
    src: string,
    srcSet: string,
    width: number
  }).isRequired
}

export { CertImage, CertsFlexContainer, CertsGrid }
