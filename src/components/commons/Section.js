import styled from 'styled-components'
import { string } from 'prop-types'

const Section = styled.section`
  background-color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  min-height: ${({ landing }) => (landing ? '100vh' : '200px')};
  padding: 2rem 1rem;
`

Section.propTypes = {
  alt: string
}

export default Section
