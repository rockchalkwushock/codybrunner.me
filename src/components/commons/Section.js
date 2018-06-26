import styled from 'styled-components'

const Section = styled.section`
  background-color: ${({ alt }) => (alt ? 'lightblue' : 'lightsalmon')};
  min-height: ${({ landing }) => (landing ? '100vh' : '400px')};
  padding: 1em 2em;
`

export default Section
