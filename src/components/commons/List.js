import styled from 'styled-components'
import { bool, number, string } from 'prop-types'

const List = styled.ul`
  display: grid;
  grid-auto-flow: ${({ flow }) => flow};
  grid-gap: ${({ gap }) => `${gap}px`};
  grid-template-columns: ${({ tags }) =>
    tags ? 'repeat(auto-fit, minmax(80px, max-content))' : '1fr'};
  padding-top: ${({ tags }) => (tags ? '0.75em' : '0')};

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    grid-template-columns: ${({ tags }) =>
      tags ? 'repeat(auto-fill, minmax(140px, 1fr))' : '1fr'};
  }
`

List.defaultProps = {
  flow: 'row',
  gap: 5
}
List.displayName = 'List'
List.propTypes = {
  flow: string,
  gap: number,
  tags: bool
}

export default List
