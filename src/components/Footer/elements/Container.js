import styled from 'styled-components'
import { bool } from 'prop-types'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 736px) {
    align-items: ${props => (props.left ? 'left' : 'right')};
  }
`

Container.displayName = 'Container'
Container.propTypes = {
  left: bool
}

export default Container
