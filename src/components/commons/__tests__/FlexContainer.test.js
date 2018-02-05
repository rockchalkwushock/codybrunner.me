import React from 'react'
import { shallow } from 'enzyme'

import FlexContainer from '../FlexContainer'

describe('Component: <FlexContainer />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<FlexContainer />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('align-items', 'center')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
  })
})
