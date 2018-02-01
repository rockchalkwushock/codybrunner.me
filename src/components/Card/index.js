import React from 'react'
import { arrayOf, shape, string } from 'prop-types'

import {
  Card,
  CardDate,
  CardExcerpt,
  CardTitle,
  CardTags,
  Tag
} from './elements'
import Link from '../Link'

const SiteCard = ({ post }) => (
  <Card>
    <CardTitle>
      <Link href={post.fields.slug} text={post.frontmatter.title} />
    </CardTitle>
    <CardDate>{post.frontmatter.date}</CardDate>
    <CardExcerpt>{post.excerpt}</CardExcerpt>
    <CardTags tags={post.frontmatter.tags} />
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
      tags: arrayOf(string).isRequired,
      title: string.isRequired
    })
  })
}

export { Tag }
export default SiteCard
