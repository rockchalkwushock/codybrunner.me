import styled from 'styled-components'
import { bool } from 'prop-types'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    align-items: ${({ left }) => (left ? 'left' : 'right')};
  }
`

Container.displayName = 'Container'
Container.propTypes = {
  left: bool
}

export default Container
