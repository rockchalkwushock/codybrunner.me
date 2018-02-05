import React from 'react'

import renderWithTheme from '../../../lib/renderWithTheme'
import Wrapper from '../Wrapper'

describe('Component: <Wrapper />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<Wrapper />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('background-color', '#7a9eb1')
    expect(wrapper).toHaveStyleRule('color', '#143a52')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('font-family', '"Raleway",sans-serif')
    expect(wrapper).toHaveStyleRule('font-size', '1rem')
    expect(wrapper).toHaveStyleRule('font-weight', '400')
    expect(wrapper).toHaveStyleRule('letter-spacing', '0px')
    expect(wrapper).toHaveStyleRule('line-height', '1.4')
    expect(wrapper).toHaveStyleRule('margin', '0 auto')
    expect(wrapper).toHaveStyleRule('min-height', '100vh')
    expect(wrapper).toHaveStyleRule('max-width', '900px')
  })
})
