import styled from 'styled-components'

const Heading = styled.h1`
  font-size: ${({ size }) => size};
  margin: unset;
  padding-bottom: 1rem;
  text-align: center;
`

Heading.defaultProps = {
  size: '1rem'
}

export default Heading
