import React from 'react'

import { Image, Link } from '../commons'
import {
  Links,
  ProjectCardGrid,
  ProjectHeading,
  ProjectCardText,
  Section
} from './elements'

const FeatureProject = ({ img, name, source, summary, url }) => (
  <ProjectCardGrid>
    <Section>
      <Image alt={name} aria-label={name} cert resolutions={img} title={name} />
      <ProjectHeading>{name}</ProjectHeading>
      <Links>
        <Link ext href={url} text="Website" />
        <Link ext href={source} text="Source" />
      </Links>
    </Section>
    <Section>
      <ProjectCardText>{summary}</ProjectCardText>
    </Section>
  </ProjectCardGrid>
)

export default FeatureProject
