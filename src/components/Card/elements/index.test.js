import React from 'react'

import renderWithTheme from '../../../lib/renderWithTheme'
import { Card, CardDate, CardExcerpt, CardTitle } from './'

describe('Component: <Card />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<Card draft={false} />)
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper.children().props()).toHaveProperty('draft', false)
    expect(wrapper).toHaveStyleRule('background-color', '#7a9eb1')
    expect(wrapper).toHaveStyleRule('border', 'none')
    expect(wrapper).toHaveStyleRule('border-radius', '10px')
    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '1px 1px 5px 1px rgba(0,0,0,0.7)'
    )
    expect(wrapper).toHaveStyleRule('padding', '1em')
    expect(wrapper).toHaveStyleRule('margin', '0 auto')
    expect(wrapper).toHaveStyleRule('transition', 'all 0.3s ease-in-out')
    expect(wrapper).toHaveStyleRule('box-shadow', 'unset', {
      modifier: ':hover'
    })
    expect(wrapper).toHaveStyleRule('width', '60%', {
      media: '(min-width:736px)'
    })
  })
  test('should have different style with prop', () => {
    wrapper = renderWithTheme(<Card draft />)
    expect(wrapper.children().props()).toHaveProperty('draft', true)
    expect(wrapper).toHaveStyleRule('border', '6px dashed red')
  })
})

describe('Component: <CardDate />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<CardDate />)
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('padding-bottom', '0.5em')
  })
})

describe('Component: <CardExcerpt />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<CardExcerpt />)
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('text-align', 'justify')
  })
})

describe('Component: <CardTitle />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(<CardTitle />)
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
