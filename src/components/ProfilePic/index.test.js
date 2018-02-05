import React from 'react'

import renderWithTheme from '../../lib/renderWithTheme'
import ProfilePic from './'

describe('Component: <ProfilePic />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<ProfilePic />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
