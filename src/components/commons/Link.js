import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const UnstyledLink = props => <Link {...props} />

export const ExternalLink = styled.a`
  background-image: ${({ theme }) => theme.reset};
  color: ${({ altClr, theme }) =>
    altClr ? theme.colors.secondary : theme.colors.alt};
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.reset};

  :hover {
    text-decoration: underline;
  }
`

export const InternalLink = styled(UnstyledLink)`
  background-image: ${({ theme }) => theme.reset};
  color: ${({ theme }) => theme.colors.alt};
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.reset};

  :hover {
    text-decoration: underline;
  }
`

const SiteLink = ({ alt, altClr, children, ext, href, key, label, text }) =>
  ext ? (
    <ExternalLink
      alt={alt}
      altClr={altClr}
      aria-label={label}
      href={href}
      key={key}
    >
      {children || text}
    </ExternalLink>
  ) : (
    <InternalLink altClr={altClr} aria-label={label} key={key} to={href}>
      {children || text}
    </InternalLink>
  )

export default SiteLink
