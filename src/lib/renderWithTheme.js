import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const renderWithTheme = Component =>
  mount(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)

export default renderWithTheme
