import React from 'react'

import {
  FlexContainer,
  Grid,
  Heading,
  Icon,
  Link,
  List,
  Text
} from '../commons'
import Card from '../Card'
import ProfilePic from '../ProfilePic'
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
 */

const HomeView = ({ meta, posts }) => (
  <FlexContainer>
    <SEO site={meta} />
    <Grid>
      <ProfilePic />
      <Heading>{meta.author}</Heading>
      <Heading4>{meta.jobTitle}</Heading4>
      <List flow="column" gap={10}>
        {meta.contacts.map(c => (
          <Link ext href={c.href} key={c.label} label={c.label}>
            <Icon className={c.className} />
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
            <Icon className={b.className} />
          </Link>
        ))}
      </List>
    </ExtendedGrid>
    <Grid alternate>
      <Heading>Recent Posts</Heading>
      <List gap={20}>
        {posts.map(({ node: post }) => (
          <Card key={post.fields.slug} post={post} />
        ))}
      </List>
    </Grid>
  </FlexContainer>
)

export default HomeView
