import React from 'react'
import { shallow } from 'enzyme'

import renderWithTheme from '../../../lib/renderWithTheme'
import Icon, { StyledIcon } from '../Icon'

describe('Component: <Icon />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Icon className="fab fa-twitter" />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have props', () => {
    expect(wrapper.props()).toHaveProperty('className', 'fab fa-twitter')
    expect(wrapper.props()).toHaveProperty('size', 1.75)
  })
  test('should have new size', () => {
    expect(wrapper.props()).toHaveProperty('size', 1.75)
    wrapper.setProps({ size: 2 })
    wrapper.update()
    expect(wrapper.props()).toHaveProperty('size', 2)
  })
})

describe('Component: <StyledIcon />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<StyledIcon className="fab fa-twitter" />)
  })
  test('should render correclty', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('color', '#143a52')
    expect(wrapper).toHaveStyleRule('font-size', '1.75em')
    expect(wrapper).toHaveStyleRule('transition', 'all 0.2s ease-in-out')
    expect(wrapper).toHaveStyleRule('color', '#ffe1b6', {
      modifier: ':hover'
    })
    expect(wrapper).toHaveStyleRule('font-size', '2em', {
      media: '(min-width:736px)'
    })
  })
})
