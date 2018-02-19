import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { bool, string } from 'prop-types'

// Need to do this for testing purposes.
/* istanbul ignore next */
const UnstyledLink = props => <Link {...props} />

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.site.linkClr};
  transition: ${({ theme }) => theme.site.transition};
  :visited {
    color: ${({ theme }) => theme.site.linkClr};
  }
  :hover {
    text-decoration: underline;
  }
`

export const InternalLink = styled(UnstyledLink)`
  color: ${({ theme }) => theme.site.linkClr};
  transition: ${({ theme }) => theme.site.transition};
  :visited {
    color: ${({ theme }) => theme.site.linkClr};
  }
  :hover {
    color: ${({ theme }) => theme.site.linkHvClr};
  }
`
ExternalLink.displayName = 'ExternalLink'
InternalLink.displayName = 'InternalLink'

const SiteLink = ({ children, ext, href, label, text }) =>
  ext ? (
    <ExternalLink href={href} aria-label={label}>
      {children || text}
    </ExternalLink>
  ) : (
    <InternalLink to={href} aria-label={label}>
      {children || text}
    </InternalLink>
  )

SiteLink.propTypes = {
  ext: bool,
  href: string.isRequired,
  label: string,
  text: string
}

export default SiteLink
