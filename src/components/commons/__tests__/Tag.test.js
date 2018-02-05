import React from 'react'

import renderWithTheme from '../../../lib/renderWithTheme'
import Tag from '../Tag'

// FIXME: Issue with `history undefined` coming from HOC.
// I beleive props are not being passed through properly.
describe.skip('Component: <Tag />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<Tag to="/tags/javascript">javascript</Tag>)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('align-items', 'center')
    expect(wrapper).toHaveStyleRule('background-color', '')
    expect(wrapper).toHaveStyleRule('border', 'none')
    expect(wrapper).toHaveStyleRule('border-radius', '10px')
    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '1px 1px 5px 1px rgba(0, 0, 0, 0.7)'
    )
    expect(wrapper).toHaveStyleRule('cursor', 'pointer')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('font-size', '0.7rem')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('letter-spacing', '1px')
    expect(wrapper).toHaveStyleRule('outline', 'none')
    expect(wrapper).toHaveStyleRule('padding', '0.25em 0.5em')
    expect(wrapper).toHaveStyleRule('transition', 'all 0.3s ease-in-out')
    expect(wrapper).toHaveStyleRule('color', '#ffe1b6', {
      modifier: ':hover'
    })
  })
})
