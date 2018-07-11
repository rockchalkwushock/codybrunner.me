import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Heading, Section } from '../commons'
import { SkillItem, SkillsList } from './elements'

export default () => (
  <StaticQuery
    query={graphql`
      query SkillsQuery {
        site {
          siteMetadata {
            skills {
              id
              text
            }
          }
        }
      }
    `}
    render={data => (
      <Section alt id="skills">
        <Heading size="2rem">Skills</Heading>
        <SkillsList>
          {data.site.siteMetadata.skills.map(skill => (
            <SkillItem key={skill.id}>{skill.text}</SkillItem>
          ))}
        </SkillsList>
      </Section>
    )}
  />
)
