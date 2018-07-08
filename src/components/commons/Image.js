import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const UnstyledImage = props => <Img {...props} />

const StyledImage = styled(UnstyledImage)`
  border-radius: 50%;
  height: 200px;
  width: 200px;

  img {
    margin: unset;
  }

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    height: 275px;
    width: 275px;
  }
`

const Image = props => <StyledImage {...props} />

export default Image
