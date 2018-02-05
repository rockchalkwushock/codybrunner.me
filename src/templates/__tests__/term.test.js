import React from 'react'
import { shallow } from 'enzyme'

import TermTemplate from '../term'

const pathContext = {
  tag: 'JavaScript',
  taggedPosts: [
    {
      excerpt: 'blah blah blah',
      fields: {
        slug: '/2018-02-03/all-about-js'
      },
      frontmatter: {
        date: 'February 03, 2018',
        draft: false,
        tags: ['JavaScript', 'fp', 'oop'],
        title: 'All About JS'
      }
    }
  ]
}

describe('Component: <TermTemplate />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TermTemplate pathContext={pathContext} />)
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should receive pathContext.tags as prop', () => {
    expect(wrapper.props()).toHaveProperty('tag')
    expect(wrapper.props()).toHaveProperty('taggedPosts')
  })
  test('should receive "tags" as {Array<Array>}', () => {
    expect(wrapper.prop('tag')).toEqual('JavaScript')
    expect(wrapper.prop('taggedPosts')).toHaveLength(1)
    expect(wrapper.prop('taggedPosts')[0]).toHaveProperty('excerpt')
    expect(wrapper.prop('taggedPosts')[0]).toHaveProperty('fields')
    expect(wrapper.prop('taggedPosts')[0]).toHaveProperty('frontmatter')
  })
})
