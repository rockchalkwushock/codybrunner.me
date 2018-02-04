import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

/**
 * @fileOverview
 *
 * HOC for testing components with `theme` prop being used.
 */

const renderWithTheme = Component =>
  mount(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)

export default renderWithTheme
