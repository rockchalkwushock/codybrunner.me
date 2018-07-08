/* eslint-disable no-undef */
import React from 'react'

import {
  About,
  Contact,
  Education,
  Experience,
  Landing,
  Main,
  Projects,
  Seo,
  Skills
} from '../components'

const IndexPage = ({ data }) => {
  const {
    about,
    contacts,
    education,
    experience,
    projects,
    skills
  } = data.site.siteMetadata
  return (
    <Main>
      <Seo site={data.site.siteMetadata} />
      <Landing icons={contacts} />
      <About about={about} image={data.aboutPic} />
      <Experience jobs={experience} />
      <Education education={education} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
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
        author
        contacts {
          className
          href
          label
        }
        description
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
        keywords
        lang
        projects {
          desc
          href
          id
          name
          src
        }
        siteUrl
        skills {
          id
          text
        }
        title
        twitter
      }
    }
  }
`

export default IndexPage
