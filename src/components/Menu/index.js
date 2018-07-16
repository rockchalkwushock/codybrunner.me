/* eslint-disable camelcase */
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
    hidden: false,
    isOpen: false,
    position: 0
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll)
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      // Handle different route navigation & closing menu.
      this.setState(state => ({ ...state, isOpen: false }))
    }
    // Handles traveling to same route & closing menu.
    this.setState(state => ({ ...state, isOpen: false }))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll)
  }
  handleOnClick = () =>
    this.state.isOpen
      ? this.setState(state => ({ ...state, isOpen: false }))
      : this.setState(state => ({ ...state, isOpen: true }))
  handleOnScroll = () => {
    const currentY = window.scrollY

    if (currentY > this.state.position) {
      this.setState(state => ({ ...state, hidden: true }))
    } else {
      this.setState(state => ({ ...state, hidden: false }))
    }
    this.setState(state => ({ ...state, position: currentY }))
  }
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
      <Nav hide={this.state.hidden}>
        <NavIcon onClick={this.handleOnClick}>
          <Icon nav="true" icon="bars" size="2x" />
        </NavIcon>
        <NavList show={this.state.isOpen}> {this.renderLinks()} </NavList>{' '}
      </Nav>
    )
  }
}

export default Menu
