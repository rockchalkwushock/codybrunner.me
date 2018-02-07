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

const sizes = {
  aspectRatio: 1,
  base64: 'really long string',
  sizes: 'another string',
  src: 'yep and another',
  srcSet: 'even longer'
}

describe('Component: <HomeView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <HomeView meta={siteMetadata} posts={posts} profilePic={sizes} />
    )
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
