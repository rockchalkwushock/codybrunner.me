import React from 'react'

import {
  FlexContainer,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  List,
  Text
} from '../commons'
import Card from '../Card'
import FeaturedProject from '../FeaturedProject'
import SEO from '../SEO'

const ExtendedGrid = Grid.extend`
  grid-template-columns: 3fr;

  > * {
    grid-column: 1 / 4;
  }
`

const Heading4 = Heading.withComponent('h4')

/**
 * @fileOverview
 * Home Page View
 *
 * Accepts siteMetadata & 5 most recent posts from GraphQL Query.
 *
 * c.className.split(', ') super boss!!
 */

const HomeView = ({ meta, posts, profilePic, projectPic, techIcons }) => (
  <FlexContainer>
    <SEO site={meta} />
    <Grid headCard>
      <Image alt={meta.author} prof sizes={profilePic} title={meta.author} />
      <Heading>{meta.author}</Heading>
      <Heading4>{meta.jobTitle}</Heading4>
      <List flow="column" gap={10}>
        {meta.contacts.map(c => (
          <Link ext href={c.href} key={c.label} label={c.label}>
            <Icon icon={c.className.split(', ')} size="2x" />
          </Link>
        ))}
      </List>
    </Grid>
    <ExtendedGrid alternate>
      <Heading>About</Heading>
      <Text>{meta.aboutSnippet}</Text>
      <Text>{meta.employment}</Text>
      <List flow="column" gap={50}>
        {meta.business.map(b => (
          <Link ext href={b.href} key={b.label} label={b.label}>
            <Icon icon={b.className.split(', ')} size="2x" />
          </Link>
        ))}
      </List>
    </ExtendedGrid>
    <Grid alternate>
      <Heading>Tech Stack</Heading>
      <Text>{meta.tech}</Text>
      <Link ext href="https://svgporn.com" text="SVG Icons Credit" />
      <ul>
        {techIcons.map(({ node }) => (
          <Image
            alt={node.name}
            aria-label={node.name}
            key={node.relativePath}
            src={node.relativePath}
            title={node.name}
          />
        ))}
      </ul>
    </Grid>
    <ExtendedGrid alternate>
      <Heading>Featured Project</Heading>
      <FeaturedProject
        img={projectPic}
        name="Masha Eltsova Photography"
        source="https://github.com/rockchalkwushock/mashaeltsova-photography"
        summary="A photography business & portfolio
        website built as a progressive web application using NextJS &
        ReactJS for my friend Masha Eltsova. It implements both English
        and Russian languages through the default browser language of
        the user via React-Intl. By using the Cloudinary API and lazy-loading
        the site is able to dynamically provide the end user with the best quality
        version of Masha's hi-res photos with the smallest possible data
        footprint leading to significantly better page load times for end
        users with poor network resources or mobile devices. The form data
        is processed by a MicroJS backend using Nodemailer to dispatch
        the booking query to Masha. This same backend acts as the API for
        querying the hi-res photos from a MongoDB collection."
        url="https://mashaeltsovaphotography.com"
      />
    </ExtendedGrid>
    <Grid alternate>
      <Heading>Recent Posts</Heading>
      <List gap={20}>
        {posts.map(({ node }) => <Card key={node.fields.slug} post={node} />)}
      </List>
    </Grid>
  </FlexContainer>
)

export default HomeView
