import styled from 'styled-components'

const Section = styled.section`
  background-color: ${({ alt, theme }) =>
    alt ? theme.colors.secondary : theme.colors.alt};
  min-height: ${({ landing }) => (landing ? '100vh' : '400px')};
  padding: 1rem;
`

export default Section
