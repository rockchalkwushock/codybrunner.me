import styled from 'styled-components'
import { bool } from 'prop-types'

const NavList = styled.ul`
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  grid-gap: 10px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 1em;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    justify-items: unset;
    margin-top: unset;
    width: unset;
    > * {
      padding: 0.25em;
    }
  }
`

NavList.displayName = 'NavList'
NavList.propTypes = {
  visible: bool.isRequired
}

export default NavList
