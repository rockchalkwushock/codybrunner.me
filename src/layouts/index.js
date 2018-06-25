/* eslint-disable no-undef */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { func } from 'prop-types'

// Site Theme
import theme from '../lib/theme'

import { Footer, Menu } from '../components'

const LayoutWrapper = ({ children, data }) => {
  const { buildTime, siteMetadata } = data.site
  const { copyright, links, menu, siteUrl } = siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Menu links={menu} />
        {children()}
        <Footer
          buildTime={buildTime}
          copyright={copyright}
          links={links}
          siteUrl={siteUrl}
        />
      </div>
    </ThemeProvider>
  )
}

LayoutWrapper.propTypes = {
  children: func.isRequired
}

export const query = graphql`
  query LayoutQuery {
    site {
      buildTime(formatString: "DD MMM YYYY")
      siteMetadata {
        copyright
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
