import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const StyledIcon = styled.i`
  color: ${({ theme }) => theme.site.linkClr};
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.site.linkHvClr};
  }
`

StyledIcon.displayName = 'Icon'

const SiteIcon = ({ className }) => <StyledIcon className={className} />

SiteIcon.propTypes = {
  className: string.isRequired
}

export default SiteIcon
