import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Card, Heading, Section } from '../commons'

const query = graphql`
query ExperienceQuery {
  site {
    siteMetadata {
      experience {
        id
        company
        role
        dates
        desc
      }
    }
  }
}
`

export default () => {
  const { site } = useStaticQuery(query)
  return (
    <Section id="experience">
      <Heading alt="true" size="2rem">
        Experience
      </Heading>
      {site.siteMetadata.experience.map(job => (
        <Card
          alt="true"
          date={job.dates}
          info={job.desc}
          key={job.id}
          role={job.role}
          title={`${job.company} - ${job.role}`}
        />
      ))}
    </Section>
  )
}