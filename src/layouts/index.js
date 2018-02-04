/* eslint-disable no-undef */
import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { withPrefix } from 'gatsby-link'
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
          {/* THIRD-PARTY LINKS */}

          <link rel="stylesheet" href={withPrefix('/css/fa-svg-with-js.css')} />
          {/* THIRD-PARTY SCRIPTS */}
          <script defer src={withPrefix('/js/fa-brands.min.js')} />
          <script defer src={withPrefix('/js/fa-solid.min.js')} />
          <script defer src={withPrefix('/js/fontawesome.min.js')} />
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
        url
      }
    }
  }
`

export default LayoutWrapper
