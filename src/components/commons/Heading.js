import styled from 'styled-components'

const Heading = styled.h1`
  color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  font-size: ${({ size }) => size || '1rem'};
  margin: unset;
  padding-bottom: 1rem;
  text-align: center;
`

export default Heading
