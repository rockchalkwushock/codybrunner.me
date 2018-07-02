import styled from 'styled-components'

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.nav.shadow};
  position: fixed;
  width: 100%;
  z-index: 1;
`

const NavList = styled.ul`
  align-items: center;
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

const NavIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: ${({ theme }) => theme.nav.padding};

  @media (min-width: 736px) {
    display: none;
  }
`

const NavItem = styled.li`
  padding: 0.5rem;
  margin: ${({ theme }) => theme.reset};
  text-transform: uppercase;
`

export { Nav, NavIcon, NavItem, NavList }
