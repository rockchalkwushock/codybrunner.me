import React, { Component } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'

import { Icon, Link } from '../commons'
import { Nav, NavIcon, NavItem, NavList } from './elements'

class Menu extends Component {
  static propTypes = {
    links: arrayOf(
      shape({
        id: number,
        href: string,
        text: string
      })
    ).isRequired
  }
  state = {
    isOpen: false
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      // Handle different route navigation & closing menu.
      this.setState(state => ({ ...state, isOpen: false }))
    }
    // Handles traveling to same route & closing menu.
    this.setState(state => ({ ...state, isOpen: false }))
  }
  handleOnClick = () =>
    this.state.isOpen
      ? this.setState(state => ({ ...state, isOpen: false }))
      : this.setState(state => ({ ...state, isOpen: true }))
  renderLinks = () =>
    this.props.links.map(link => {
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
  render() {
    return (
      <Nav>
        <NavIcon onClick={this.handleOnClick}>
          <Icon nav icon="bars" size="2x" />
        </NavIcon>
        <NavList show={this.state.isOpen}> {this.renderLinks()} </NavList>{' '}
      </Nav>
    )
  }
}

export default Menu
