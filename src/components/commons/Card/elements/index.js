import styled from 'styled-components'
import { bool } from 'prop-types'

const CardContainer = styled.div`
  border: 1px solid
    ${({ alt, theme }) => (alt ? theme.colors.secondary : theme.colors.alt)};
  padding: 1rem;
  margin: 0.75rem auto;
  max-width: 56.25rem;
`

CardContainer.propTypes = {
  alt: bool
}

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

CardTitle.propTypes = {
  alt: bool
}

const CardDate = styled.h5`
  color: ${({ alt, theme }) =>
    alt ? theme.colors.secondary : theme.colors.alt};
  margin: unset;
  padding-top: 0.5rem;
  text-align: center;
`

CardDate.propTypes = {
  alt: bool
}

const CardInfo = styled.p`
  color: ${({ alt, theme }) =>
    alt ? theme.colors.secondary : theme.colors.alt};
  margin: unset;
  padding-top: 0.5rem;
  text-align: center;
`

CardInfo.propTypes = {
  alt: bool
}

const CardLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.5rem;
`

export { CardContainer, CardDate, CardInfo, CardLinks, CardTitle }
