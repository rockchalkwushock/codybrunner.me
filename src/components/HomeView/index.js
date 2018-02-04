import React from 'react'

import { FlexContainer, Grid, Icon, Link, List } from '../commons'
import Card from '../Card'
import ProfilePic from '../ProfilePic'
import SEO from '../SEO'

const ExtendedGrid = Grid.extend`
  grid-template-columns: 3fr;

  > * {
    grid-column: 1 / 4;
  }
`

const HomeView = ({ meta, posts }) => (
  <FlexContainer>
    <SEO site={meta} />
    <Grid>
      <ProfilePic />
      <h2>{meta.author}</h2>
      <h4>{meta.jobTitle}</h4>
      <List flow="column" gap={10}>
        {meta.contacts.map(c => (
          <Link ext href={c.href} key={c.label}>
            <Icon className={c.className} />
          </Link>
        ))}
      </List>
    </Grid>
    <ExtendedGrid alternate>
      <h2>About</h2>
      <p>
        Cody Brunner is a full-stack JavaScript developer residing in Wichita,
        Kansas. Cody primarily works with Node, React, & GraphQL. When not
        writing code he loves to go hiking, play with his dog & niece, and watch
        his Jayhawks win!
      </p>
      <p>
        Are you interested in contacting Cody for employment opportunities? Feel
        free to reach out via email, call through Telegram, or checkout his
        resume.
      </p>
      <List flow="column" gap={50}>
        {meta.business.map(b => (
          <Link ext href={b.href} key={b.label}>
            <Icon className={b.className} />
          </Link>
        ))}
      </List>
    </ExtendedGrid>
    <Grid alternate>
      <h1>Recent Posts</h1>
      <List gap={20}>
        {posts.map(({ node: post }) => (
          <Card key={post.fields.slug} post={post} />
        ))}
      </List>
    </Grid>
  </FlexContainer>
)

export default HomeView
