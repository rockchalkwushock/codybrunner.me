/* eslint-disable react/no-danger */
import React from 'react'
import { arrayOf, bool, number, shape, string } from 'prop-types'

import {
  Content,
  Disqus,
  Header,
  Pagination,
  Post,
  Share,
  Tags
} from './elements'
import SEO from '../SEO'

const SitePost = ({ ctx, meta, post }) => {
  const { fields, frontmatter, html, timeToRead, wordCount } = post
  const { disqusShortname, url } = meta
  const postUrl = `${url}${fields.slug}`
  return (
    <Post draft={frontmatter.draft}>
      <SEO post={post} postSeo site={meta} />
      <Header
        date={frontmatter.date}
        time={timeToRead}
        title={frontmatter.title}
        words={wordCount.words}
      />
      <Content dangerouslySetInnerHTML={{ __html: html }} />
      <Tags tags={frontmatter.tags} />
      <Pagination {...ctx} />
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
  // ctx: shape({
  //   next: shape({

  //   }),
  //   prev: shape({

  //   }),
  //   slug: string.isRequired
  // }),
  meta: shape({
    disqusShortname: string.isRequired,
    url: string.isRequired
  }).isRequired,
  post: shape({
    fields: shape({
      slug: string.isRequired
    }).isRequired,
    frontmatter: shape({
      date: string.isRequired,
      draft: bool.isRequired,
      tags: arrayOf(string).isRequired,
      title: string.isRequired
    }).isRequired,
    html: string.isRequired,
    timeToRead: number.isRequired,
    wordCount: shape({
      words: number.isRequired
    }).isRequired
  }).isRequired
}

export { Content, Header, Post, Share }
export default SitePost