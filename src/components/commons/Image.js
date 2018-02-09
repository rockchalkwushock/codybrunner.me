/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { bool, number, shape, string } from 'prop-types'

// Ensure props can be passed on `gatsby-image`.
const UnStyledImage = props => <Img {...props} />

const CertImages = styled(UnStyledImage)`
  border-radius: ${({ theme }) => theme.site.borderRadius};
  box-shadow: ${({ theme }) => theme.site.shadow};
`

CertImages.displayName = 'CertImage'

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

const BaseImage = styled.img`
  height: 75px;
  margin: 10px;
  width: 75px;
`

BaseImage.displayName = 'BaseImage'

const Image = ({ alt, cert, prof, resolutions, sizes, src, title }) =>
  cert ? (
    <CertImages alt={alt} resolutions={resolutions} title={title} />
  ) : prof ? (
    <ProfilePic alt={alt} sizes={sizes} title={title} />
  ) : (
    <BaseImage
      alt={alt}
      aria-label={alt}
      src={require(`../../img/${src}`)}
      title={title}
    />
  )

Image.propTypes = {
  alt: string.isRequired,
  cert: bool,
  prof: bool,
  resolutions: shape({
    height: number,
    src: string,
    srcSet: string,
    srcWebp: string,
    srcSetWebp: string,
    width: number
  }),
  sizes: shape({
    aspectRatio: number,
    src: string,
    srcSet: string,
    srcWebp: string,
    srcSetWebp: string,
    sizes: string
  }),
  src: string,
  title: string.isRequired
}

export default Image
