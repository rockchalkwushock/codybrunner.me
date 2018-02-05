import React from 'react'
import { shallow } from 'enzyme'

import AboutView from './'

const { siteMetadata } = require('../../../gatsby-config')

const content = {
  fields: {
    slug: '/turdsspace/'
  },
  frontmatter: {
    draft: false,
    title: 'All About JS'
  },
  html: 'hello world',
  timeToRead: 10
}

describe('Component: <AboutView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <AboutView content={content} meta={siteMetadata} modTime="02-03-99" />
    )
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have matching content on html', () => {
    expect(
      wrapper.find('Content').prop('dangerouslySetInnerHTML').__html
    ).toEqual('hello world')
  })
})
