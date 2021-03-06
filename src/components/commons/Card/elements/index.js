import styled from 'styled-components'
import { string } from 'prop-types'

const CardContainer = styled.div`
  border: 1px solid
    ${({ alt, theme }) =>
      alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  padding: 1rem;
  margin: 0.75rem auto;
  max-width: ${({ theme }) => theme.maxWidth};
`

CardContainer.propTypes = {
  alt: string
}

const CardTitle = styled.h1`
  color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  font-size: 1.55rem;
  margin: unset;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    font-size: 2rem;
  }
`

CardTitle.propTypes = {
  alt: string
}

const CardDate = styled.h5`
  color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  margin: unset;
  padding-top: 0.5rem;
  text-align: center;
`

CardDate.propTypes = {
  alt: string
}

const CardInfo = styled.p`
  color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  margin: unset;
  padding-top: 0.5rem;
  text-align: center;
`

CardInfo.propTypes = {
  alt: string
}

const CardLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.5rem;
`

export { CardContainer, CardDate, CardInfo, CardLinks, CardTitle }
