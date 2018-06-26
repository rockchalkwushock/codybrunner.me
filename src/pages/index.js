import React from 'react'

import { Main, Section } from '../components'

const IndexPage = () => (
  <Main>
    <Section id="landing" landing>
      LANDING
    </Section>
    <Section id="about" alt>
      About
    </Section>
    <Section id="experience">Experience</Section>
    <Section id="education" alt>
      Education
    </Section>
    <Section id="projects">Projects</Section>
    <Section id="skills" alt>
      Skills
    </Section>
    <Section id="contact">Contact</Section>
  </Main>
)

export default IndexPage
