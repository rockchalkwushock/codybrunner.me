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
import { Footer, Main, NavBar, Wrapper } from '../components'

const LayoutWrapper = ({ children, data }) => {
  const { buildTime, siteMetadata } = data.site
  const { siteCopyright, links, siteMenu, siteUrl } = siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
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
        <NavBar location={location.pathname} menu={siteMenu} />
        <Main>{children()}</Main>
        <Footer
          buildTime={buildTime}
          copyright={siteCopyright}
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
        siteCopyright
        siteMenu {
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
