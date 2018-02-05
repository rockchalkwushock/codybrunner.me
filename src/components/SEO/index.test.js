import React from 'react'
import { shallow } from 'enzyme'

import SEO from './'

const siteData = {
  author: 'Turd Ferguson',
  description: "Turd's Space",
  googleVerify: 'sjfasdfasdfsdf',
  keywords: "snl, that's a funny name",
  lang: 'sarcasm',
  siteUrl: 'turdspace.com',
  title: "That's a Funny Name",
  twitter: '@theRealTurd'
}

const postData = {
  fields: {
    slug: '/turdsspace/'
  },
  frontmatter: {
    date: '02-11-99',
    description: 'Yabba dabba do',
    draft: false,
    keywords: 'something borrowed, something earned',
    tags: ['snl', 'funny business', 'testing'],
    title: 'A funny article from a funny guy'
  },
  wordCount: {
    words: 567
  }
}

describe('Component: <SEO />', () => {
  let wrapper
  let post
  beforeEach(() => {
    wrapper = shallow(<SEO site={siteData} />)
    post = shallow(<SEO post={postData} postSeo site={siteData} />)
  })

  test('should render correctly as site data', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should render correctly as post data', () => {
    expect(post).toMatchSnapshot()
  })
  test('should show as itemType: Article if post', () => {
    expect(
      post
        .find('html')
        .prop('itemType')
        .substr(18)
    ).toEqual('Article')
  })
  test('should show as itemType: WebSite if not post', () => {
    expect(
      wrapper
        .find('html')
        .prop('itemType')
        .substr(18)
    ).toEqual('WebSite')
  })
})
