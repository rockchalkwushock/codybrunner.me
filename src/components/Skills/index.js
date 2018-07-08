import React from 'react'

import { Heading, Section } from '../commons'
import { SkillItem, SkillsList } from './elements'

const Skills = ({ skills }) => (
  <Section alt id="skills">
    <Heading size="2rem">Skills</Heading>
    <SkillsList>
      {skills.map(skill => <SkillItem key={skill.id}>{skill.text}</SkillItem>)}
    </SkillsList>
  </Section>
)

export default Skills
