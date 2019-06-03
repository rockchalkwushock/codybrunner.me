import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Card, Heading, Section } from '../commons'

const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
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

export default () => {
  const { site } = useStaticQuery(query)
  return (
    <Section id="projects">
      <Heading alt="true" size="2rem">
        Projects
      </Heading>
      {site.siteMetadata.projects.map(prj => (
        <Card
          alt="true"
          href={prj.href}
          info={prj.desc}
          key={prj.id}
          src={prj.src}
          title={prj.name}
        />
      ))}
    </Section>
  )
}