import React from 'react'
import { shallow } from 'enzyme'

import SitePost from './'

const ctx = {
  next: '/posts/2',
  prev: '/posts/1',
  slug: '/turdsspace/'
}
const meta = {
  disqusShortname: 'turdf',
  siteUrl: 'turdferguson.com'
}
const post = {
  excerpt: 'blah blah blah',
  fields: {
    slug: '/turdsspace/'
  },
  frontmatter: {
    date: 'February 03, 2018',
    draft: false,
    tags: ['JavaScript', 'fp', 'oop'],
    title: 'All About JS'
  },
  html: 'post body',
  timeToRead: 17,
  wordCount: {
    words: 567
  }
}

describe('Component: <SitePost />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SitePost ctx={ctx} meta={meta} post={post} />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have matching html', () => {
    expect(
      wrapper.find('Content').prop('dangerouslySetInnerHTML').__html
    ).toEqual('post body')
  })
})
