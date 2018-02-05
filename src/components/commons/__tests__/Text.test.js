import React from 'react'
import { shallow } from 'enzyme'

import Text from '../Text'

describe('Component: <Text />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Text />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
