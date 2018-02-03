import React from 'react'

import { FlexContainer, Grid, Icon, Link, List } from '../commons'
import Card from '../Card'
import ProfilePic from '../ProfilePic'
import SEO from '../SEO'

const HomeView = ({ meta, posts }) => (
  <FlexContainer>
    <SEO site={meta} />
    <Grid>
      <ProfilePic />
      <h2>{meta.author}</h2>
      <h4>{meta.jobTitle}</h4>
      <List flow="column" gap={10}>
        {meta.social.map(s => (
          <Link ext href={s.href} key={s.label}>
            <Icon className={s.className} />
          </Link>
        ))}
      </List>
      <List flow="column" gap={60}>
        {meta.market.map(m => (
          <Link ext href={m.href} key={m.label} text={m.text} />
        ))}
      </List>
    </Grid>
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
