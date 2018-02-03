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
      <Link href={next.fields.slug}>
        <Icon className="fas fa-arrow-circle-right fa-2x" />
      </Link>
    </PaginationContainer>
  ) : !next ? (
    <PaginationContainer>
      <Link href={prev.fields.slug}>
        <Icon className="fas fa-arrow-circle-left fa-2x" />
      </Link>
    </PaginationContainer>
  ) : next.fields.slug === '/about/' ? (
    <PaginationContainer>
      <Link href={prev.fields.slug}>
        <Icon className="fas fa-arrow-circle-left fa-2x" />
      </Link>
    </PaginationContainer>
  ) : (
    <PaginationContainer>
      <Link href={prev.fields.slug}>
        <Icon className="fas fa-arrow-circle-left fa-2x" />
      </Link>
      <Link href={next.fields.slug}>
        <Icon className="fas fa-arrow-circle-right fa-2x" />
      </Link>
    </PaginationContainer>
  )

export default Pagination
