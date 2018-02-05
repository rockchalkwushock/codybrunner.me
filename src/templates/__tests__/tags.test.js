import React from 'react'
import { shallow } from 'enzyme'

import TagsTemplate from '../tags'

const pathContext = {
  tags: [['one', [1, 2, 3]], ['two', [1, 2, 3]], ['three', [1, 2, 3]]]
}

describe('Component: <TagsTemplate />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TagsTemplate pathContext={pathContext} />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should receive pathContext.tags as prop', () => {
    expect(wrapper.props()).toHaveProperty('tags')
  })
  test('should receive "tags" as {Array<Array>}', () => {
    expect(wrapper.prop('tags')).toHaveLength(3)
    expect(wrapper.prop('tags')[0]).toHaveLength(2)
    expect(wrapper.prop('tags')[0][0]).toEqual('one')
    expect(wrapper.prop('tags')[0][1]).toHaveLength(3)
  })
})
