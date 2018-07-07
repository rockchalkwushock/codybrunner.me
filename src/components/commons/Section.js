import styled from 'styled-components'

const Section = styled.section`
  background-color: ${({ alt, theme }) =>
    alt ? theme.colors.secondary : theme.colors.alt};
  min-height: ${({ landing }) => (landing ? '100vh' : '200px')};
  padding: 4.236rem 1rem;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    padding: 5.438rem 1rem;
  }
`

export default Section
