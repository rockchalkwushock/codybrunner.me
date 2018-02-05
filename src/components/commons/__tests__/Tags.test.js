import React from 'react'
import { shallow } from 'enzyme'

import Tags from '../Tags'

const tags = ['hello', 'ALL CAPS', 'world']

describe('Component: <Tags />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Tags tags={tags} />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
