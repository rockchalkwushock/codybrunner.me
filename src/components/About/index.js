import React from 'react'

import { Image, Section, Text } from '../commons'

// ! Maybe go with CSS Grid here.
const AboutSection = Section.extend`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`

const About = ({ about, image }) => (
  <AboutSection alt id="about">
    <Image {...image} />
    <Text text={about} />
  </AboutSection>
)

export default About
