import styled from 'styled-components'
import { bool } from 'prop-types'

const Grid = styled.div`
  background-color: ${({ alternate, theme }) =>
    alternate ? theme.post.bg : 'inherit'};
  border-radius: ${({ headCard, theme }) =>
    headCard ? '0px' : theme.site.borderRadius};
  box-shadow: ${({ headCard, theme }) =>
    headCard ? 'unset' : theme.site.shadow};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 1em 0;
  padding: 2em 1em;
`

Grid.displayName = 'Grid'
Grid.propTypes = {
  alternate: bool,
  headCard: bool
}

export default Grid
