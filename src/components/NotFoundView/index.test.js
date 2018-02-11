import React from 'react'
import { shallow } from 'enzyme'

import NotFoundView from './'

const { siteMetadata } = require('../../../gatsby-config')

const meme = {
  resolutions: {
    height: 300,
    src: 'a pic',
    srcSet: 'a longer string representing a pic',
    width: 275
  }
}

describe('Component: <NotFoundView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NotFoundView meta={siteMetadata} meme={meme} />)
  })

  test('should render correctly as site data', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have Text component with hard coded value', () => {
    expect(
      wrapper
        .find('Text')
        .children()
        .text()
    ).toEqual(
      "Woah warrior, Woah! You shouldn't be here...NSA is watching, maybe go home okay?"
    )
  })
})
