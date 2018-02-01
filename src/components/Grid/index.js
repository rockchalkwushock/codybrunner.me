import styled from 'styled-components'
import { bool } from 'prop-types'

const Grid = styled.div`
  background-color: ${({ alternate, theme }) =>
    alternate ? theme.post.bg : 'inherit'};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 2em 1em;
`

Grid.displayName = 'Grid'
Grid.propTypes = {
  alternate: bool
}

export default Grid
