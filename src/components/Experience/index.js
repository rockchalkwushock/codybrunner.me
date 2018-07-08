import React from 'react'

import { Card, Heading, Section } from '../commons'

const Experience = ({ jobs }) => (
  <Section id="experience">
    <Heading alt size="2rem">
      Experience
    </Heading>
    {jobs.map(job => (
      <Card
        alt
        date={job.dates}
        info={job.desc}
        key={job.id}
        role={job.role}
        title={`${job.company} - ${job.role}`}
      />
    ))}
  </Section>
)

export default Experience
