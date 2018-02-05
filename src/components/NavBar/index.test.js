import React from 'react'
import { shallow } from 'enzyme'

import NavBar from './'

const { siteMetadata } = require('../../../gatsby-config')

describe('Component: <NavBar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavBar menu={siteMetadata.menu} location="/about" />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should present as not visible for mobile nav', () => {
    expect(wrapper.state()).toHaveProperty('visible', false)
  })
  test('should toggle state onClick', () => {
    expect(wrapper.state()).toHaveProperty('visible', false)
    wrapper.find('NavIcon').simulate('click')
    expect(wrapper.state()).toHaveProperty('visible', true)
    wrapper.find('NavIcon').simulate('click')
    expect(wrapper.state()).toHaveProperty('visible', false)
  })
})
