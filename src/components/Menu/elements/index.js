import styled from 'styled-components'
import { bool } from 'prop-types'

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.nav.shadow};
  height: 4.236rem;
  left: 0;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  position: fixed;
  top: 0;
  transition: visibility 0.5s, opacity 0.5s linear;
  visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
  width: 100%;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    height: 5.438rem;
  }
`

Nav.propTypes = {
  hide: bool
}

const NavList = styled.ul`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: ${({ theme }) => theme.reset};
  padding: ${({ theme }) => theme.nav.padding};

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    display: flex;
    flex-direction: row;
  }
`

NavList.propTypes = {
  show: bool
}

const NavIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: ${({ theme }) => theme.nav.padding};

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    display: none;
  }
`

const NavItem = styled.li`
  padding: 0.5rem;
  margin: ${({ theme }) => theme.reset};
  text-transform: uppercase;
`

export { Nav, NavIcon, NavItem, NavList }
