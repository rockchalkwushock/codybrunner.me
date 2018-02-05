import React from 'react'
import { shallow } from 'enzyme'

import Card from './'

const post = {
  excerpt: 'blah blah',
  fields: {
    slug: '/turdsspace/'
  },
  frontmatter: {
    date: '02-03-99',
    draft: true,
    tags: ['one', 'two'],
    title: 'All About JS'
  }
}

describe('Component: <Card />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Card post={post} />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
