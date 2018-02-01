import styled from 'styled-components'

const Nav = styled.nav`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
`

Nav.displayName = 'Nav'

export default Nav
