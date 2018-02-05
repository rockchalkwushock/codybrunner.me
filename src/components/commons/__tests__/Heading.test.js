import React from 'react'
import { shallow } from 'enzyme'

import Heading from '../Heading'

describe('Component: <Heading />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Heading />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
