import styled from 'styled-components'

const Section = styled.section`
  background-color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  min-height: ${({ landing }) => (landing ? '100vh' : '200px')};
  padding: 2rem 1rem;
`

export default Section