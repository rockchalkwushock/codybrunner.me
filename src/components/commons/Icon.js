import React from 'react'
import styled from 'styled-components'
import { number, string } from 'prop-types'

const StyledIcon = styled.svg`
  color: ${({ theme }) => theme.site.linkClr};
  font-size: ${({ size }) => `${size}em`};
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.site.linkHvClr};
  }
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    font-size: 2em;
  }
`

StyledIcon.displayName = 'Icon'
StyledIcon.defaultProps = {
  size: 1.75
}
StyledIcon.propTypes = {
  size: number
}

const SiteIcon = ({ className, size }) => (
  <StyledIcon className={className} size={size} />
)

SiteIcon.propTypes = {
  className: string.isRequired,
  size: number
}

export default SiteIcon
