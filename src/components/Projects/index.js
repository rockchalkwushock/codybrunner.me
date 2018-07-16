import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Card, Heading, Section } from '../commons'

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <Section id="projects">
        <Heading alt="true" size="2rem">
          Projects
        </Heading>
        {data.site.siteMetadata.projects.map(prj => (
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
    )}
  />
)
