import React from 'react'
import { shallow } from 'enzyme'

import renderWithTheme from '../../../lib/renderWithTheme'
import Icon, { StyledIcon } from '../Icon'

const icon = 'fab, twitter'

describe('Component: <Icon />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Icon icon={icon.split(', ')} size="2x" />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have props', () => {
    expect(wrapper.props()).toHaveProperty('icon', ['fab', 'twitter'])
    expect(wrapper.props()).toHaveProperty('size', '2x')
  })
})

describe('Component: <StyledIcon />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<StyledIcon icon={icon.split(', ')} size="2x" />)
  })
  test('should render correclty', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('color', '#143a52')
    expect(wrapper).toHaveStyleRule('transition', 'all 0.3s ease-in-out')
    expect(wrapper).toHaveStyleRule('color', '#ffe1b6', {
      modifier: ':hover'
    })
    expect(wrapper).toHaveStyleRule('font-size', '2em', {
      media: '(min-width:736px)'
    })
  })
})
