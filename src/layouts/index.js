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
// Layout Components
import { Footer, NavBar, Wrapper } from '../components'

const LayoutWrapper = ({ children, data, location }) => {
  const { buildTime, siteMetadata } = data.site
  const { copyright, links, menu, url } = siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Helmet>
          {/* VERIFICATIONS */}
          <meta
            name="google-site-verification"
            content={siteMetadata.googleVerify}
          />
          {/* EXTERNAL LINKS */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway"
          />
          {/* EXTERNAL SCRIPTS */}
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"
          />
        </Helmet>
        <NavBar location={location.pathname} menu={menu} />
        {children()}
        <Footer
          buildTime={buildTime}
          copyright={copyright}
          links={links}
          siteUrl={url}
        />
      </Wrapper>
    </ThemeProvider>
  )
}

LayoutWrapper.propTypes = {
  children: func.isRequired
}

export const templateWrapper = graphql`
  query LayoutQuery {
    site {
      buildTime(formatString: "DD MMM YYYY")
      siteMetadata {
        copyright
        googleVerify
        links {
          creativeCommons {
            href
            text
          }
          gatsby {
            href
            text
          }
          now {
            href
            text
          }
          src {
            href
          }
        }
        menu {
          id
          href
          text
        }
        url
      }
    }
  }
`

export default LayoutWrapper
