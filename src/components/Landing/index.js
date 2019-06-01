import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'

import { Heading, Icon, Link, Section } from '../commons'

const LandingSection = styled(Section)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.alt};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SubHeading = Heading.withComponent('h3')

const query = graphql`
query IconsQuery {
  site {
    siteMetadata {
      contacts {
        className
        href
        label
      }
    }
  }
}
`

export default () => {
  const { site } = useStaticQuery(query)
  return (
    <LandingSection id="landing" landing>
      <Heading alt="true" size="4rem">
        Cody Brunner
      </Heading>
      <SubHeading alt="true" size="2rem">
        Full Stack Web Developer in Portland, Oregon
      </SubHeading>
      <ul>
        {site.siteMetadata.contacts.map(icon => (
          <Link
            alt={icon.label}
            ext
            href={icon.href}
            key={icon.label}
            label={icon.lable}
          >
            <Icon icon={icon.className.split(', ')} size="2x" />
          </Link>
        ))}
      </ul>
    </LandingSection>
  )
}