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

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 80%;
  justify-content: center;
  padding: 1em;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    flex-direction: row;
    font-size: 100%;
    justify-content: space-between;
  }
`

Footer.displayName = 'Footer'
Container.displayName = 'Container'
Container.propTypes = {
  left: bool
}

export { Container, Footer }
