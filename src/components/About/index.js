import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'

import { Image, Section, Text } from '../commons'

const AboutSection = styled(Section)`
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

const query = graphql`
query AboutQuery {
  profilePic: file(relativePath: { eq: "profile_pic.jpg" }) {
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
`

export default () => {
  const { profilePic, site } = useStaticQuery(query)
  return (
    <AboutSection alt="true" id="about">
      <Image avatar fluid={profilePic.childImageSharp.fluid} />
      <Text text={site.siteMetadata.about} />
    </AboutSection>
)}
