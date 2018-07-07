import styled from 'styled-components'

const CardContainer = styled.div`
  border: 1px solid
    ${({ alt, theme }) => (alt ? theme.colors.secondary : theme.colors.alt)};
  padding: 1rem;
  margin: 0.75rem auto;
  max-width: 900px;
`

const CardTitle = styled.h1`
  color: ${({ alt, theme }) =>
    alt ? theme.colors.secondary : theme.colors.alt};
  font-size: 1.55rem;
  margin: unset;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    font-size: 2rem;
  }
`

const CardDate = styled.h5`
  color: ${({ alt, theme }) =>
    alt ? theme.colors.secondary : theme.colors.alt};
  margin: unset;
  padding-top: 0.5rem;
  text-align: center;
`

const CardInfo = styled.p`
  color: ${({ alt, theme }) =>
    alt ? theme.colors.secondary : theme.colors.alt};
  margin: unset;
  padding-top: 0.5rem;
  text-align: center;
`

const CardLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.5rem;
`

export { CardContainer, CardDate, CardInfo, CardLinks, CardTitle }
