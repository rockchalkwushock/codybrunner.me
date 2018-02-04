import React from 'react'
import { arrayOf, bool, shape, string } from 'prop-types'

import { Link, Tags } from '../commons'
import { Card, CardDate, CardExcerpt, CardTitle } from './elements'

/**
 * @fileOverview
 * Card Component
 *
 * Accepts individual post data from GraphQL Query.
 */

const SiteCard = ({ post }) => (
  <Card draft={post.frontmatter.draft}>
    <CardTitle>
      <Link href={post.fields.slug} text={post.frontmatter.title} />
    </CardTitle>
    <CardDate>{post.frontmatter.date}</CardDate>
    <CardExcerpt>{post.excerpt}</CardExcerpt>
    <Tags tags={post.frontmatter.tags} />
  </Card>
)

SiteCard.propTypes = {
  post: shape({
    excerpt: string.isRequired,
    fields: shape({
      slug: string.isRequired
    }),
    frontmatter: shape({
      date: string.isRequired,
      draft: bool.isRequired,
      tags: arrayOf(string).isRequired,
      title: string.isRequired
    })
  })
}

export default SiteCard
