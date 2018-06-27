import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { bool, string } from 'prop-types'

const UnstyledLink = props => <Link {...props} />

export const ExternalLink = styled.a`
  background-image: ${({ theme }) => theme.reset};
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.reset};

  :hover {
    text-decoration: underline;
  }
`

export const InternalLink = styled(UnstyledLink)`
  background-image: ${({ theme }) => theme.reset};
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.reset};

  :hover {
    text-decoration: underline;
  }
`

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
