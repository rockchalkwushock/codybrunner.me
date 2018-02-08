import React from 'react'

import { FlexContainer, Grid, List } from '../commons'
import Card from '../Card'
import { mergeStrings } from '../../lib/helpers'
import Paginate from '../Paginate'
import SEO from '../SEO'

/**
 * @fileOverview
 * Posts Page View
 *
 * Accepts array of posts & siteMetadata from GraphQL Query.
 */

const PostsView = ({ ctx, meta }) => {
  const { next, nodes, page, pages, prev } = ctx
  const updatedMeta = {
    ...meta,
    description: "Cody's personal and tech blog.",
    keywords: mergeStrings(
      meta.keywords,
      'blog, personal blog, tech blog, reactjs blog, apollo/graphql blog, javascript blog, nodejs blog, web-development blog'
    ),
    title: 'Cody Brunner - Blog'
  }
  return (
    <FlexContainer>
      <SEO site={updatedMeta} />
      <Grid alternate>
        <h1>Cody's Blog</h1>
        <List gap={20}>
          {nodes.map(({ node }) => <Card key={node.fields.slug} post={node} />)}
        </List>
        <Paginate
          currentPage={page}
          nextPage={next}
          prevPage={prev}
          totalPages={pages}
        />
      </Grid>
    </FlexContainer>
  )
}

export default PostsView
