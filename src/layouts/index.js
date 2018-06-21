/* eslint-disable no-undef */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { func } from 'prop-types'

// Site Theme
import theme from '../lib/theme'

const LayoutWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children()}</ThemeProvider>
)

LayoutWrapper.propTypes = {
  children: func.isRequired
}

export default LayoutWrapper
