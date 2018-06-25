import styled from 'styled-components'

const Nav = styled.nav`
  background-color: lightcoral;
  width: 100%;
`

const NavList = styled.ul`
  align-items: center;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: unset;
  padding: 1rem;

  @media (min-width: 736px) {
    display: flex;
    flex-direction: row;
  }
`

const NavIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 1em;

  @media (min-width: 736px) {
    display: none;
  }
`

const NavItem = styled.li`
  padding: 1rem;
  text-transform: uppercase;
`

export { Nav, NavIcon, NavItem, NavList }
