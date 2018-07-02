import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
  margin: unset;
  padding: 1rem 0;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    padding: 2rem;
    width: 50%;
  }
`

const Text = ({ text }) => <StyledText>{text}</StyledText>

export default Text
