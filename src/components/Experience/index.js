import React from 'react'

import { Card, Section } from '../commons'

const Experience = ({ jobs }) => (
  <Section id="experience">
    {jobs.map(job => (
      <Card
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
