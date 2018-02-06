import React from 'react'

import renderWithTheme from '../../../lib/renderWithTheme'
import { Container, Footer } from './'

describe('Component: <Container />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<Container />)
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper.children().props()).toHaveProperty('left', undefined)
    expect(wrapper).toHaveStyleRule('align-items', 'center')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('text-align', 'center')
    expect(wrapper).toHaveStyleRule('align-items', 'right', {
      media: '(min-width:736px)'
    })
  })
  test('should have different style with prop', () => {
    wrapper = renderWithTheme(<Container left />)
    expect(wrapper.children().props()).toHaveProperty('left', true)
    expect(wrapper).toHaveStyleRule('align-items', 'left', {
      media: '(min-width:736px)'
    })
  })
})

describe('Component: <Footer />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<Footer />)
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('align-items', 'center')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('font-size', '80%')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('padding', '1em')
    expect(wrapper).toHaveStyleRule('flex-direction', 'row', {
      media: '(min-width:736px)'
    })
    expect(wrapper).toHaveStyleRule('font-size', '100%', {
      media: '(min-width:736px)'
    })
    expect(wrapper).toHaveStyleRule('justify-content', 'space-between', {
      media: '(min-width:736px)'
    })
  })
})
