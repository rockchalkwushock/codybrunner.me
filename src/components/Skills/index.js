import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Heading, Image, Section } from '../commons'
import { SkillItem, SkillsList } from './elements'

const query = graphql`
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
`

export default () => {
  const { site } = useStaticQuery(query)
  return (
    <Section alt="true" id="skills">
      <Heading size="2rem">Skills</Heading>
      <SkillsList>
        {site.siteMetadata.skills.map(skill => (
          <SkillItem key={skill.id}>{skill.text}</SkillItem>
        ))}
      </SkillsList>
    </Section>
  )
}