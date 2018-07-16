import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Card, Heading, Section } from '../commons'

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <Section id="experience">
        <Heading alt="true" size="2rem">
          Experience
        </Heading>
        {data.site.siteMetadata.experience.map(job => (
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
    )}
  />
)
