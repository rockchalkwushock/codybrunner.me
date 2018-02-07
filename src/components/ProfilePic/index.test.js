import React from 'react'

import renderWithTheme from '../../lib/renderWithTheme'
import ProfilePic from './'

const sizes = {
  aspectRatio: 1,
  base64: 'really long string',
  sizes: 'another string',
  src: 'yep and another',
  srcSet: 'even longer'
}

describe('Component: <ProfilePic />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(
      <ProfilePic alt="a pic" sizes={sizes} title="hello" />
    )
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have props', () => {
    expect(wrapper.children().props()).toHaveProperty('alt', 'a pic')
    expect(wrapper.children().props()).toHaveProperty('sizes')
    expect(wrapper.children().props()).toHaveProperty('title', 'hello')
  })
})
