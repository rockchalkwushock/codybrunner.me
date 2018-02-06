import React from 'react'
import { bool, number, string } from 'prop-types'

import { PaginateLink, PaginationContainer } from './elements'

const Paginate = props => (
  <PaginationContainer
    next={!!props.nextPage}
    post={props.post}
    prev={!!props.prevPage}
  >
    <PaginateLink
      icon="arrow-circle-left"
      label="Next Page"
      to={props.prevPage}
    />
    {props.post ? null : (
      <h2>{`${props.currentPage} - ${props.totalPages}`}</h2>
    )}
    <PaginateLink
      icon="arrow-circle-right"
      label="Previous Page"
      to={props.nextPage}
    />
  </PaginationContainer>
)

Paginate.propTypes = {
  currentPage: number,
  nextPage: string,
  post: bool,
  prevPage: string,
  totalPages: number
}

export default Paginate
