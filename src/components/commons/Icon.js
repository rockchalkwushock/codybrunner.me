import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faBars, faSpinner } from '@fortawesome/free-solid-svg-icons'

// By setting things up like this react-fontawesome knows of the icons
// I am also only using these icons from the libraries so less overhead.
library.add(
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
  faTwitter,
  faYoutube,
  faBars
)

const UnstyledIcon = props => <FontAwesomeIcon {...props} />

export const StyledIcon = styled(UnstyledIcon)`
  color: ${({ nav, theme }) =>
    nav === 'true' ? theme.colors.alt : theme.colors.secondary};
  font-size: 1.75rem;
  margin: 0 0.5rem;

  :hover {
    color: yellow;
  }

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    font-size: 2em;
  }
`

const SiteIcon = ({ nav, icon, size }) => (
  <StyledIcon nav={nav} icon={icon} size={size} />
)

const StyledLoader = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Loading = () => (
  <StyledLoader>
    <FontAwesomeIcon icon={faSpinner} size="3x" spin />
  </StyledLoader>
)

export { Loading }
export default SiteIcon
