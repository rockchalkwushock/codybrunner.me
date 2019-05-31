import React from "react"
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './GlobalStyles'
import Footer from './Footer'
import theme from '../theme'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      {children}
      <Footer />
    </React.Fragment>
  </ThemeProvider>
)

export default Layout
