import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { Icon, Link } from '../commons'
import { Nav, NavIcon, NavItem, NavList } from './elements'

const query = graphql`
 query MenuQuery {
  site {
    siteMetadata {
      menu {
        id
        href
        text
      }
    }
  }
 }
`

const Menu = () => {
  const [state, setState] = React.useState({
    hidden: false,
    isOpen: false,
    position: 0
  })

  const { site } = useStaticQuery(query)

  const handleOnClick = () => {
    state.isOpen ? setState({ ...state, isOpen: false }) : setState({ ...state, isOpen: true})
  }

  React.useEffect(() => {

    const handleOnScroll = () => {
      const currentY = window.scrollY
      currentY > state.position ? setState({...state, hidden: true}) : setState({ ...state, hidden: false})
      setState({...state, position: currentY })
    }

    window.addEventListener('scroll', handleOnScroll)

    return function cleanup() {
      window.removeEventListener('scroll', handleOnScroll)
    }
  })
  const renderLinks = () => {
    return site.siteMetadata.menu.map(link => {
      if (link.id === 3 || link.id === 8) {
        return (
          <NavItem key={link.id}>
            <Link ext href={link.href} label={link.text} text={link.text} />
          </NavItem>
        )
      }
      return (
        <NavItem key={link.id}>
          <Link href={link.href} label={link.text} text={link.text} />
        </NavItem>
      )
    })
  }
  return (
    <Nav hide={state.hidden}>
    <NavIcon onClick={handleOnClick}>
      <Icon nav="true" icon="bars" size="2x" />
    </NavIcon>
    <NavList show={state.isOpen}> {renderLinks()} </NavList>{' '}
  </Nav>
  )
}

export default Menu
