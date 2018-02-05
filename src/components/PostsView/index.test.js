import React from 'react'
import { shallow } from 'enzyme'

import PostsView from './'

const posts = [
  {
    node: {
      excerpt: 'blah blah blah',
      fields: {
        slug: '/turdsspace/'
      },
      frontmatter: {
        date: 'February 03, 2018',
        draft: false,
        tags: ['JavaScript', 'fp', 'oop'],
        title: 'All About JS'
      }
    }
  }
]
const site = {}

describe('Component: <PostsView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PostsView posts={posts} site={site} />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have 1 post in list', () => {
    expect(wrapper.find('List').children()).toHaveLength(1)
  })
})
