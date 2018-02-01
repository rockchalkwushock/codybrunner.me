import styled from 'styled-components'

const Card = styled.div`
  padding: 0.5em;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    width: 60%;
  }
`

export default Card
