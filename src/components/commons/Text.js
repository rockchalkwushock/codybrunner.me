import React from 'react'
import styled from 'styled-components'
import { bool, string } from 'prop-types'

const StyledText = styled.p`
  color: ${({ alt, theme }) =>
    alt ? theme.colors.secondary : theme.colors.alt};
  margin: unset;
  padding: 1rem 0;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    padding: 2rem;
    width: 50%;
  }
`

StyledText.propTypes = {
  alt: bool
}

const Text = ({ alt, children, text }) => (
  <StyledText alt={alt}>{text || children}</StyledText>
)

Text.propTypes = {
  alt: bool,
  text: string
}

export default Text
