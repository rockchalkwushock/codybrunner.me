import styled from 'styled-components'
import { bool } from 'prop-types'

const List = styled.ul`
  display: grid;
  grid-auto-flow: ${({ flow }) => (flow ? 'column' : 'row')};
  grid-gap: ${({ space }) => (space ? '50px' : '10px')};
  grid-template-columns: 1fr;
`

List.displayName = 'List'
List.propTypes = {
  flow: bool,
  space: bool
}

export default List
