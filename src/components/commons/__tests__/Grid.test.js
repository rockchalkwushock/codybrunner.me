import React from 'react'
import { shallow } from 'enzyme'

import renderWithTheme from '../../../lib/renderWithTheme'
import Grid from '../Grid'

describe('Component: <Grid />', () => {
  let alt
  let wrapper
  beforeEach(() => {
    alt = renderWithTheme(<Grid alternate />)
    wrapper = shallow(<Grid />)
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should render correclty as alternate', () => {
    expect(alt).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('background-color', 'inherit')
    expect(wrapper).toHaveStyleRule('display', 'grid')
    expect(wrapper).toHaveStyleRule('grid-gap', '10px')
    expect(wrapper).toHaveStyleRule('grid-template-columns', '1fr')
    expect(wrapper).toHaveStyleRule('justify-items', 'center')
    expect(wrapper).toHaveStyleRule('margin', '1em 0')
    expect(wrapper).toHaveStyleRule('padding', '2em 1em')
  })
  test('should have styles as alternate', () => {
    expect(alt).toHaveStyleRule('background-color', '#f9f8eb')
  })
})
