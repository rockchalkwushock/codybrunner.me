import React from 'react'

import { Card, Heading, Section } from '../commons'

const Projects = ({ projects }) => (
  <Section id="projects">
    <Heading alt size="2rem">
      Projects
    </Heading>
    {projects.map(prj => (
      <Card
        alt
        href={prj.href}
        info={prj.desc}
        key={prj.id}
        src={prj.src}
        title={prj.name}
      />
    ))}
  </Section>
)

export default Projects
