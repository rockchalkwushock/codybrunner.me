/* eslint-disable no-nested-ternary */
import React from 'react'

import { FlexContainer, Icon, Link } from '../../commons'

const PaginationContainer = FlexContainer.extend`
  flex-direction: row;
  justify-content: space-around;
  padding: 1em 0;
`

const Pagination = ({ next, prev }) =>
  !prev ? (
    <PaginationContainer>
      <Link
        label={`On to next post: ${next.frontmatter.title}`}
        href={next.fields.slug}
      >
        <Icon className="fas fa-arrow-circle-right" size={2} />
      </Link>
    </PaginationContainer>
  ) : !next ? (
    <PaginationContainer>
      <Link
        label={`Back to previous post: ${prev.frontmatter.title}`}
        href={prev.fields.slug}
      >
        <Icon className="fas fa-arrow-circle-left" size={2} />
      </Link>
    </PaginationContainer>
  ) : next.fields.slug === '/about/' ? (
    <PaginationContainer>
      <Link
        label={`Back to previous post: ${prev.frontmatter.title}`}
        href={prev.fields.slug}
      >
        <Icon className="fas fa-arrow-circle-left" size={2} />
      </Link>
    </PaginationContainer>
  ) : (
    <PaginationContainer>
      <Link
        label={`Back to previous post: ${prev.frontmatter.title}`}
        href={prev.fields.slug}
      >
        <Icon className="fas fa-arrow-circle-left" size={2} />
      </Link>
      <Link
        label={`On to next post: ${next.frontmatter.title}`}
        href={next.fields.slug}
      >
        <Icon className="fas fa-arrow-circle-right" size={2} />
      </Link>
    </PaginationContainer>
  )

export default Pagination
