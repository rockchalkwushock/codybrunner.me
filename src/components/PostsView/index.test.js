import React from 'react'
import { shallow } from 'enzyme'

import PostsView from './'

const { siteMetadata } = require('../../../gatsby-config')

const template = {
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

const ctx = {
  page: 1,
  pages: 2,
  nodes: new Array(15).fill(template)
}

describe('Component: <PostsView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PostsView ctx={ctx} meta={siteMetadata} />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have 15 posts in list', () => {
    expect(wrapper.find('List').children()).toHaveLength(15)
  })
})
