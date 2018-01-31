import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { bool, string } from 'prop-types'

// Need to do this for testing purposes.
/* istanbul ignore next */
const UnstyledLink = props => <Link {...props} />

const ExternalLink = styled.a`
  color: ${props => props.theme.site.linkClr};
  transition: all 0.2s ease-in;
  :visited {
    color: ${props => props.theme.site.linkClr};
  }
  :hover {
    color: ${props => props.theme.site.linkHvClr};
  }
`

const InternalLink = styled(UnstyledLink)`
  color: ${props => props.theme.site.linkClr};
  transition: all 0.2s ease-in;
  :visited {
    color: ${props => props.theme.site.linkClr};
  }
  :hover {
    color: ${props => props.theme.site.linkHvClr};
  }
`
ExternalLink.displayName = 'ExternalLink'
InternalLink.displayName = 'InternalLink'

const SiteLink = ({ children, ext, href, text }) =>
  ext ? (
    <ExternalLink href={href}>{children || text}</ExternalLink>
  ) : (
    <InternalLink to={href}>{text}</InternalLink>
  )

SiteLink.propTypes = {
  ext: bool,
  href: string.isRequired,
  text: string
}

export default SiteLink
