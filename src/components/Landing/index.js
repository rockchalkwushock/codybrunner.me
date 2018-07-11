import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Heading, Icon, Link, Section } from '../commons'

const LandingSection = Section.extend`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.alt};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SubHeading = Heading.withComponent('h3')

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <LandingSection id="landing" landing>
        <Heading alt size="4rem">
          Cody Brunner
        </Heading>
        <SubHeading alt size="2rem">
          Full Stack Web Developer in Portland, Oregon
        </SubHeading>
        <ul>
          {data.site.siteMetadata.contacts.map(icon => (
            <Link ext href={icon.href} key={icon.id} label={icon.lable}>
              <Icon icon={icon.className.split(', ')} key={icon.id} size="2x" />
            </Link>
          ))}
        </ul>
      </LandingSection>
    )}
  />
)
