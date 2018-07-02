/* eslint-disable no-undef */
import React from 'react'

import { About, Landing, Main, Section } from '../components'

const IndexPage = ({ data }) => {
  const { about, contacts } = data.site.siteMetadata
  return (
    <Main>
      <Landing icons={contacts} />
      <About about={about} image={data.aboutPic} />
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
}

export const query = graphql`
  query HomePageQuery {
    aboutPic: imageSharp(id: { regex: "/profile_pic/" }) {
      sizes(maxHeight: 200, maxWidth: 200, quality: 90) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    site {
      siteMetadata {
        about
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
