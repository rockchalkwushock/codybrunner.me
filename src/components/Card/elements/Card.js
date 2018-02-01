import styled from 'styled-components'

const Card = styled.div`
  background-color: ${({ theme }) => theme.site.bg};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  padding: 1em;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    width: 60%;
  }
`

export default Card
