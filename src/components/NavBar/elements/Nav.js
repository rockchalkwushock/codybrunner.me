import styled from 'styled-components'

const Nav = styled.nav`
  align-items: flex-start;
  background-color: ${props => props.theme.site.bg};
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;
  @media (min-width: 736px) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
`

Nav.displayName = 'Nav'

export default Nav
