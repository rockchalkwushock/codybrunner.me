import React from 'react'
import { shallow } from 'enzyme'

import TagsView from './'

const tags = [['one', [1, 2, 3]], ['two', [1, 2, 3]], ['three', [1, 2, 3]]]

describe('Component: <TagsView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TagsView tags={tags} />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have length of three', () => {
    expect(wrapper.find('List').children()).toHaveLength(3)
  })
})
