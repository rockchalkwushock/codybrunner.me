import styled from 'styled-components'

const NavIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    display: none;
  }
`

NavIcon.displayName = 'NavIcon'

export default NavIcon
