import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Card, Heading, Section } from '../commons'

const query = graphql`
  query EducationQuery {
    site {
      siteMetadata {
        education {
          id
          location
          name
          dates
        }
      }
    }
  }
`

export default () => {
  const { site } = useStaticQuery(query)
  return (
    <Section alt="true" id="education">
      <Heading size="2rem">Education</Heading>
      {site.siteMetadata.education.map(ed => (
        <Card
          date={ed.dates}
          key={ed.id}
          title={`${ed.name} - ${ed.location}`}
        />
      ))}
    </Section>
  )
}