import React from 'react'

import { FlexContainer, Grid, List } from '../commons'
import Card from '../Card'
import Paginate from '../Paginate'
import SEO from '../SEO'

/**
 * @fileOverview
 * Posts Page View
 *
 * Accepts array of posts & siteMetadata from GraphQL Query.
 */

const PostsView = ({ ctx, site }) => {
  const { next, nodes, page, pages, prev } = ctx
  return (
    <FlexContainer>
      <SEO site={site} />
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
