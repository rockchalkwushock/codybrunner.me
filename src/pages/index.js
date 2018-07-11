import React from 'react'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

// Site Theme
import theme from '../utils/theme'
// Global Styling
import '../utils/global'
// Components
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Landing,
  Main,
  Menu,
  Projects,
  Seo,
  Skills
} from '../components'

const IndexPage = ({ data }) => {
  const { buildTime, siteMetadata } = data.site
  const { copyright, links, menu, siteUrl } = siteMetadata
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Seo />
        <Menu links={menu} />
        <Main>
          <Landing />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </Main>
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

export const query = graphql`
  query HomePageQuery {
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

export default IndexPage
