import styled from 'styled-components'

const Main = styled.main`
  background-color: ${props => props.theme.site.bg};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 1em;
`

Main.displayName = 'Main'

export default Main
