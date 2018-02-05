import React from 'react'
import { shallow } from 'enzyme'

import HomeView from './'

const { siteMetadata } = require('../../../gatsby-config')

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

describe('Component: <HomeView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<HomeView meta={siteMetadata} posts={posts} />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
