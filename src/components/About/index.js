import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Image, Section, Text } from '../commons'

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

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        file(relativePath: { eq: "profile_pic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        site {
          siteMetadata {
            about
          }
        }
      }
    `}
    render={data => (
      <AboutSection alt id="about">
        <Image fluid={data.file.childImageSharp.fluid} />
        <Text text={data.site.siteMetadata.about} />
      </AboutSection>
    )}
  />
)

export default About
