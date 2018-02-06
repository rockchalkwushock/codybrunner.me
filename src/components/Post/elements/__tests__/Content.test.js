import React from 'react'

import renderWithTheme from '../../../../lib/renderWithTheme'
import Content from '../Content'

const content = 'hello world'

// TODO: Better testing here
// I need a real content object with all the elements to test their styles.

describe('Component: <Content />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    )
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('padding-top', '1em')
  })
})
