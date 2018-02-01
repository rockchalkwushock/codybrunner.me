import styled from 'styled-components'

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 80%;
  justify-content: center;
  padding: 1em;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    flex-direction: row;
    font-size: 100%;
    justify-content: space-between;
  }
`

Footer.displayName = 'Footer'

export default Footer
