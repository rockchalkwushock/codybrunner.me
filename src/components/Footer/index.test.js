import React from 'react'
import { shallow } from 'enzyme'

import Footer from './'

const { siteMetadata } = require('../../../gatsby-config')

describe('Component: <Footer />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Footer
        buildTime="02-03-99"
        copyright="© Turd"
        links={siteMetadata.links}
        siteUrl="turdferguson.com"
      />
    )
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
