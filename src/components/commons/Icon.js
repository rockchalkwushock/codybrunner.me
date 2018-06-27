import React from 'react'
import styled from 'styled-components'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faMediumM from '@fortawesome/fontawesome-free-brands/faMediumM'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

// By setting things up like this react-fontawesome knows of the icons
// I am also only using these icons from the libraries so less overhead.
fontawesome.library.add(
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
  faTwitter,
  faYoutube,
  faBars,
  faEnvelope
)

const UnstyledIcon = props => <FontAwesomeIcon {...props} />

export const StyledIcon = styled(UnstyledIcon)`
  margin: 0 0.5rem;

  :hover {
    color: yellow;
  }
`

const SiteIcon = ({ icon, size }) => <StyledIcon icon={icon} size={size} />

export default SiteIcon
