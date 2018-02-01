/* eslint-disable react/no-danger */
import React from 'react'

import { Content, Header, Post, Tags } from './elements'

const SitePost = ({ post }) => {
  const { frontmatter, html, timeToRead, wordCount } = post
  return (
    <Post>
      <Header
        date={frontmatter.date}
        time={timeToRead}
        title={frontmatter.title}
        words={wordCount.words}
      />
      <Content dangerouslySetInnerHTML={{ __html: html }} />
      <Tags tags={frontmatter.tags} />
    </Post>
  )
}
export default SitePost
