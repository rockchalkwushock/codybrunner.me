/* eslint-disable no-undef */
import React from 'react'

import { Landing, Main, Section } from '../components'

const IndexPage = ({ data }) => (
  <Main>
    <Landing icons={data.site.siteMetadata.contacts} />
    <Section id="about" alt>
      About
    </Section>
    <Section id="experience">Experience</Section>
    <Section id="education" alt>
      Education
    </Section>
    <Section id="projects">Projects</Section>
    <Section id="skills" alt>
      Skills
    </Section>
    <Section id="contact">Contact</Section>
  </Main>
)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        contacts {
          className
          href
          label
        }
      }
    }
  }
`

export default IndexPage
