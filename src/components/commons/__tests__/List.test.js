import React from 'react'

import renderWithTheme from '../../../lib/renderWithTheme'
import List from '../List'

describe('Component: <List />', () => {
  let forTags
  let wrapper
  beforeEach(() => {
    forTags = renderWithTheme(<List tags />)
    wrapper = renderWithTheme(<List />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('display', 'grid')
    expect(wrapper).toHaveStyleRule('grid-auto-flow', 'row')
    expect(wrapper).toHaveStyleRule('grid-gap', '5px')
    expect(wrapper).toHaveStyleRule('grid-template-columns', '1fr')
    expect(wrapper).toHaveStyleRule('padding-top', '0')
    expect(wrapper).toHaveStyleRule('grid-template-columns', '1fr', {
      media: '(min-width:736px)'
    })
  })
  test('should have styles for tags', () => {
    expect(forTags).toHaveStyleRule('display', 'grid')
    expect(forTags).toHaveStyleRule('grid-auto-flow', 'row')
    expect(forTags).toHaveStyleRule('grid-gap', '5px')
    expect(forTags).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fit,minmax(80px,max-content))'
    )
    expect(forTags).toHaveStyleRule('padding-top', '0.75em')
    expect(forTags).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fill,minmax(140px,1fr))',
      {
        media: '(min-width:736px)'
      }
    )
  })
  test('should be able to change flow and gap on props', () => {
    expect(wrapper.children().props()).toHaveProperty('flow', 'row')
    expect(wrapper.children().props()).toHaveProperty('gap', 5)
    wrapper = renderWithTheme(<List flow="column" gap={10} />)
    expect(wrapper.children().props()).toHaveProperty('flow', 'column')
    expect(wrapper.children().props()).toHaveProperty('gap', 10)
  })
})
