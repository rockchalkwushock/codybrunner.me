import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { number, shape, string } from 'prop-types'

const UnStyledImage = props => <Img {...props} />

const ProfilePic = styled(UnStyledImage)`
  background-color: ${({ theme }) => theme.site.bg};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
`

ProfilePic.displayName = 'ProfilePic'
ProfilePic.propTypes = {
  alt: string.isRequired,
  sizes: shape({
    aspectRatio: number,
    base64: string,
    sizes: string,
    src: string,
    srcSet: string
  }).isRequired,
  title: string.isRequired
}

export default ProfilePic
