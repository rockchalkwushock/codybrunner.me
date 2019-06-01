import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const UnstyledImage = props => <Img {...props} />

const StyledImage = styled(UnstyledImage)`
  border-radius: ${({ avatar }) => (avatar ? '50%' : 'none')};
  height: ${({ avatar }) => (avatar ? '225px' : '350px')};
  margin: ${({ avatar }) => (avatar ? '0' : '0 auto')};
  width: ${({ avatar }) => (avatar ? '225px' : '380px')};

  img {
    margin: unset;
  }

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    height: ${({ avatar }) => (avatar ? '275px' : '450px')};
    width: ${({ avatar }) => (avatar ? '275px' : '600px')};
  }
`

const Image = ({ avatar, fluid, fixed }) => (
  <StyledImage avatar={avatar} fluid={fluid} fixed={fixed} />
)

export default Image