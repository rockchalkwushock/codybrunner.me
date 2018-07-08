import React from 'react'

import { Card, Heading, Section } from '../commons'

const Education = ({ education }) => (
  <Section alt id="education">
    <Heading size="2rem">Education</Heading>
    {education.map(ed => (
      <Card date={ed.dates} key={ed.id} title={`${ed.name} - ${ed.location}`} />
    ))}
  </Section>
)

export default Education
