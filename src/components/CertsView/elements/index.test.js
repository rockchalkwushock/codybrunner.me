import React from 'react'
import { shallow } from 'enzyme'

import { CertImage, CertsFlexContainer, CertsGrid } from './'
import renderWithTheme from '../../../lib/renderWithTheme'

const resolutions = {}

describe('Component: <CertImage />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(
      <CertImage alt="a pic" resolutions={resolutions} title="HELLO" />
    )
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Component: <CertsFlexContainer />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CertsFlexContainer />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('align-items', 'unset')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('text-align', 'center')
  })
})

describe('Component: <CertsGrid />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<CertsGrid />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('background-color', 'inherit')
    expect(wrapper).toHaveStyleRule('border-radius', '10px')
    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '1px 1px 5px 1px rgba(0,0,0,0.7)'
    )
    expect(wrapper).toHaveStyleRule('display', 'grid')
    expect(wrapper).toHaveStyleRule('grid-gap', '10px')
    expect(wrapper).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fit,minmax(275px,1fr))'
    )
    expect(wrapper).toHaveStyleRule('justify-items', 'center')
    expect(wrapper).toHaveStyleRule('margin', '1em 0')
    expect(wrapper).toHaveStyleRule('padding', '2em 1em')
  })
})
