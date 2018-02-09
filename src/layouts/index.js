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

const LayoutWrapper = ({ children, data }) => {
  const { buildTime, siteMetadata } = data.site
  const { copyright, links, menu, siteUrl } = siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Helmet>
          {/* VERIFICATIONS */}
          <meta
            name="google-site-verification"
            content={siteMetadata.googleVerify}
          />
          {/* NOTE: This is being set because gatsby-plugin-favicon does not set it.*/}
          <meta name="theme-color" content="#ffe1b6" />
        </Helmet>
        <NavBar menu={menu} />
        {children()}
        <Footer
          buildTime={buildTime}
          copyright={copyright}
          links={links}
          siteUrl={siteUrl}
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
          styled {
            href
            text
          }
        }
        menu {
          id
          href
          text
        }
        siteUrl
      }
    }
  }
`

export default LayoutWrapper
