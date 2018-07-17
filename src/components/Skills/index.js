import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Heading, Image, Section } from '../commons'
import { Carousel, SkillItem, SkillsList } from './elements'

export default () => (
  <StaticQuery
    query={graphql`
      query SkillsQuery {
        images: allFile(filter: { relativePath: { regex: "/certs/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 200, quality: 85) {
                  sizes
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            skills {
              id
              text
            }
          }
        }
      }
    `}
    render={data => (
      <Section alt="true" id="skills">
        <Heading size="2rem">Skills</Heading>
        <SkillsList>
          {data.site.siteMetadata.skills.map(skill => (
            <SkillItem key={skill.id}>{skill.text}</SkillItem>
          ))}
        </SkillsList>
        <Heading size="2rem">Certificates</Heading>
        <Carousel>
          <Slider arrows={false} dots>
            {data.images.edges.map(({ node }) => (
              <Image fluid={node.childImageSharp.fluid} />
            ))}
          </Slider>
        </Carousel>
      </Section>
    )}
  />
)
