import React from 'react'
import { shallow } from 'enzyme'

import TermView from './'

const taggedPosts = [
  {
    excerpt: 'blah blah',
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

describe('Component: <TermView />', () => {
  let withTaggedPosts
  let noTaggedPosts
  beforeEach(() => {
    withTaggedPosts = shallow(
      <TermView tag="JavaScript" taggedPosts={taggedPosts} />
    )
    noTaggedPosts = shallow(<TermView tag="JavaScript" taggedPosts={null} />)
  })

  test('should render correctly with taggedPosts', () => {
    expect(withTaggedPosts).toMatchSnapshot()
  })
  test('should render correctly with no taggedPosts', () => {
    expect(noTaggedPosts).toMatchSnapshot()
  })
  test('should render tagged posts if posts are present', () => {
    expect(withTaggedPosts.find('List').children()).toHaveLength(1)
  })
  test('should render link back home if no posts found for term', () => {
    expect(noTaggedPosts.find('SiteLink')).toBeDefined()
    expect(noTaggedPosts.find('SiteLink').prop('text')).toEqual('Go back home')
  })
})
