/* eslint-disable no-undef */
import React from 'react'

import {
  About,
  Education,
  Experience,
  Landing,
  Main,
  Projects,
  Section
} from '../components'

const IndexPage = ({ data }) => {
  const {
    about,
    contacts,
    education,
    experience,
    projects
  } = data.site.siteMetadata
  return (
    <Main>
      <Landing icons={contacts} />
      <About about={about} image={data.aboutPic} />
      <Experience jobs={experience} />
      <Education education={education} />
      <Projects projects={projects} />
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
        education {
          id
          location
          name
          dates
        }
        experience {
          id
          company
          role
          dates
          desc
        }
        projects {
          desc
          href
          id
          name
          src
        }
      }
    }
  }
`

export default IndexPage
