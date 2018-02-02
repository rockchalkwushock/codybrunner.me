/* eslint-disable react/no-danger */
import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'

import { Content, Disqus, Header, Post, Share, Tags } from './elements'

const SitePost = ({ post, site }) => {
  const { fields, frontmatter, html, timeToRead, wordCount } = post
  const { disqusShortname, siteUrl } = site.siteMetadata
  const postUrl = `${siteUrl}${fields.slug}`
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
      <Share title={frontmatter.title} url={postUrl} />
      {process.env.NODE_ENV === 'production' ? (
        <Disqus
          shortname={disqusShortname}
          title={frontmatter.title}
          url={postUrl}
        />
      ) : null}
    </Post>
  )
}

SitePost.propTypes = {
  post: shape({
    fields: shape({
      slug: string.isRequired
    }).isRequired,
    frontmatter: shape({
      date: string.isRequired,
      tags: arrayOf(string).isRequired,
      title: string.isRequired
    }).isRequired,
    html: string.isRequired,
    timeToRead: number.isRequired,
    wordCount: shape({
      words: number.isRequired
    }).isRequired
  }).isRequired,
  site: shape({
    siteMetadata: shape({
      disqusShortname: string.isRequired,
      siteUrl: string.isRequired
    }).isRequired
  }).isRequired
}

export default SitePost
