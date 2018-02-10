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

const HomeView = ({ meta, posts, profilePic, techIcons }) => (
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
      <Text>
        The following icons are from{' '}
        <Link ext href="https://svgporn.com" text="SVG Porn" />
      </Text>
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
    <Grid alternate>
      <Heading>Recent Posts</Heading>
      <List gap={20}>
        {posts.map(({ node }) => <Card key={node.fields.slug} post={node} />)}
      </List>
    </Grid>
  </FlexContainer>
)

export default HomeView
