import styled from 'styled-components'
import { string } from 'prop-types'

const Heading = styled.h1`
  color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  font-size: ${({ size }) => size};
  margin: unset;
  padding-bottom: 1rem;
  text-align: center;
`

Heading.defaultProps = {
  size: '1rem'
}

Heading.propTypes = {
  alt: string,
  size: string
}

export default Heading
