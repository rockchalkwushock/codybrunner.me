import React from 'react'
import { shallow } from 'enzyme'

import CertsView from './'

const { siteMetadata } = require('../../../gatsby-config')

const template = {
  node: {
    parent: {
      __typename: 'File',
      name: 'advanced-react-redux'
    },
    resolutions: {
      height: 300,
      src: 'a pic',
      srcSet: 'a longer string representing a pic',
      width: 275
    }
  }
}

const certs = new Array(10).fill(template)

describe('Component: <CertsView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CertsView certs={certs} meta={siteMetadata} />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have 10 post in certs', () => {
    expect(wrapper.find('CertsGrid').children()).toHaveLength(10)
  })
})
