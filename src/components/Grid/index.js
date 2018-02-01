import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 2em 1em;
`

Grid.displayName = 'Grid'

export default Grid
