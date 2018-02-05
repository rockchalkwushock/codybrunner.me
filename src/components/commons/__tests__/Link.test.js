import React from 'react'
import { shallow } from 'enzyme'

import renderWithTheme from '../../../lib/renderWithTheme'
import Link, { ExternalLink, InternalLink } from '../Link'

describe('Component: <Link />', () => {
  let external
  let internal
  beforeEach(() => {
    external = shallow(<Link ext href="https://cnn.com" text="CNN" />)
    internal = shallow(<Link href="/about" text="About" />)
  })

  test('should render correctly as ExternalLink', () => {
    expect(external).toMatchSnapshot()
  })
  test('should render correctly as InternalLink', () => {
    expect(internal).toMatchSnapshot()
  })
})

describe('Component: <ExternalLink />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(
      <ExternalLink href="cnn.com" aria-label="link to cnn" />
    )
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('color', '#143a52')
    expect(wrapper).toHaveStyleRule('transition', 'all 0.2s ease-in')
    expect(wrapper).toHaveStyleRule('color', '#143a52', {
      modifier: ':visited'
    })
    expect(wrapper).toHaveStyleRule('color', '#ffe1b6', {
      modifier: ':hover'
    })
  })
})

// FIXME: Issue with `history undefined` coming from HOC.
// I beleive props are not being passed through properly.
describe.skip('Component: <InternalLink />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = renderWithTheme(
      <InternalLink to="/about" aria-label="link about page" />
    )
  })
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('color', '#143a52')
    expect(wrapper).toHaveStyleRule('transition', 'all 0.2s ease-in')
    expect(wrapper).toHaveStyleRule('color', '#143a52', {
      modifier: ':visited'
    })
    expect(wrapper).toHaveStyleRule('color', '#ffe1b6', {
      modifier: ':hover'
    })
  })
})
