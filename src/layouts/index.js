/* eslint-disable no-undef */
import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { func } from 'prop-types'

// PrismJS theme for markdown files
import 'prismjs/themes/prism-solarizedlight.css'
// Global Styles
import '../lib/global'
// Site Theme
import theme from '../lib/theme'

const LayoutWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        link={[
          {
            href: 'https://fonts.googleapis.com/css?family=Open+Sans|Raleway',
            rel: 'stylesheet'
          }
        ]}
        script={[
          {
            defer: true,
            src: 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'
          }
        ]}
      />
      {children()}
    </div>
  </ThemeProvider>
)

LayoutWrapper.propTypes = {
  children: func.isRequired
}

export default LayoutWrapper
