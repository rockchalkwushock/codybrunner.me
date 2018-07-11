import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { bool, string } from 'prop-types'

const UnstyledLink = props => <Link {...props} />

export const ExternalLink = styled.a`
  background-image: ${({ theme }) => theme.reset};
  color: ${({ alt, theme }) =>
    alt ? theme.colors.secondary : theme.colors.alt};
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.reset};

  :hover {
    text-decoration: underline;
  }
`

ExternalLink.propTypes = {
  alt: bool
}

export const InternalLink = styled(UnstyledLink)`
  background-image: ${({ theme }) => theme.reset};
  color: ${({ theme }) => theme.colors.alt};
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.reset};

  :hover {
    text-decoration: underline;
  }
`

const SiteLink = ({ alt, children, ext, href, label, text }) =>
  ext ? (
    <ExternalLink alt={alt} href={href} aria-label={label}>
      {children || text}
    </ExternalLink>
  ) : (
    <InternalLink to={href} aria-label={label}>
      {children || text}
    </InternalLink>
  )

SiteLink.propTypes = {
  alt: bool,
  ext: bool,
  href: string.isRequired,
  label: string,
  text: string
}

export default SiteLink
