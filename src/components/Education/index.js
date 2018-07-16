import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Card, Heading, Section } from '../commons'

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <Section alt="true" id="education">
        <Heading size="2rem">Education</Heading>
        {data.site.siteMetadata.education.map(ed => (
          <Card
            date={ed.dates}
            key={ed.id}
            title={`${ed.name} - ${ed.location}`}
          />
        ))}
      </Section>
    )}
  />
)
