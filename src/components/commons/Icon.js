import React from 'react'
import styled from 'styled-components'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faTelegramPlane from '@fortawesome/fontawesome-free-brands/faTelegramPlane'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faArrowCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowCircleLeft'
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faFilePdf from '@fortawesome/fontawesome-free-solid/faFilePdf'
import faRss from '@fortawesome/fontawesome-free-solid/faRss'

// By setting things up like this react-fontawesome knows of the icons
// I am also only using these icons from the libraries so less overhead.
fontawesome.library.add(
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegramPlane,
  faTwitter,
  faYoutube,
  faArrowCircleLeft,
  faArrowCircleRight,
  faBars,
  faEnvelope,
  faFilePdf,
  faRss
)

const UnstyledIcon = props => <FontAwesomeIcon {...props} />

export const StyledIcon = styled(UnstyledIcon)`
  color: ${({ theme }) => theme.site.linkClr};
  transition: ${({ theme }) => theme.site.transition};
  :hover {
    color: ${({ theme }) => theme.site.linkHvClr};
  }
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    font-size: 2em;
  }
`

StyledIcon.displayName = 'Icon'

const SiteIcon = ({ icon, size }) => <StyledIcon icon={icon} size={size} />

export default SiteIcon
