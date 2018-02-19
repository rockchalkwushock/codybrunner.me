import styled from 'styled-components'

import { Heading, Text } from '../../commons'

const ProjectHeading = Heading.withComponent('h2').extend`
  font-size: 1.2rem;
  padding-top: 1em;
  text-align: center;
`

const ProjectCardGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    grid-gap: unset;
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProjectCardText = Text.extend`
  text-align: justify;
  padding: 0.75em;
`

const Section = styled.div`
  align-self: center;
`

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 0.5em;
`

export { Links, Section, ProjectCardGrid, ProjectCardText, ProjectHeading }
