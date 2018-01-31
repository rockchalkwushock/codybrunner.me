import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const StyledIcon = styled.i`
  color: ${props => props.theme.site.bg};
`

StyledIcon.displayName = 'Icon'

const SiteIcon = ({ className }) => <StyledIcon className={className} />

SiteIcon.propTypes = {
  className: string.isRequired
}

export default SiteIcon
