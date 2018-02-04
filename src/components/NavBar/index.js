import React, { Component } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'

import { Nav, NavIcon, NavList } from './elements'
import { Icon, Link } from '../commons'

/**
 * @fileOverview
 * Site Navigation
 *
 * Present in all views.
 */

class NavBar extends Component {
  static propTypes = {
    menu: arrayOf(
      shape({
        href: string.isRequired,
        id: number.isRequired,
        text: string.isRequired
      })
    ).isRequired,
    location: string.isRequired
  }
  state = {
    visible: false
  }
  handleOnClick = () =>
    this.state.visible
      ? this.setState(state => ({ ...state, visible: false }))
      : this.setState(state => ({ ...state, visible: true }))
  renderLinks = () =>
    this.props.menu.map(l => <Link href={l.href} key={l.id} text={l.text} />)
  render() {
    return (
      <Nav>
        <NavIcon aria-label="hamburger button" onClick={this.handleOnClick}>
          <Icon className="fas fa-bars" size={3} />
        </NavIcon>
        <NavList visible={this.state.visible}>{this.renderLinks()}</NavList>
      </Nav>
    )
  }
}

export default NavBar
