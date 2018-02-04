/* eslint-disable react/no-danger */
import React from 'react'

import { Content, Header, Post, Share } from '../Post'
import SEO from '../SEO'

/**
 * @fileOverview
 * About Page View
 *
 * Accepts data for markdown file /content/posts/about.md.
 * Will present the updated 'fileTime', no date in in frontmatter.
 */

const AboutView = ({ content, meta, modTime }) => {
  const { fields, frontmatter, html, timeToRead, wordCount } = content
  // REVIEW: trailing slash, problematic? Plugin for handling this.
  const aboutUrl = `${meta.siteUrl}${fields.slug}`
  return (
    <Post draft={frontmatter.draft}>
      <SEO site={meta} />
      <Header
        about
        date={modTime}
        time={timeToRead}
        title={frontmatter.title}
        words={wordCount.words}
      />
      <Content dangerouslySetInnerHTML={{ __html: html }} />
      <Share title={frontmatter.title} url={aboutUrl} />
    </Post>
  )
}

export default AboutView
