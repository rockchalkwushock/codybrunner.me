/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'
import { bool, string } from 'prop-types'

import { Icon, Link } from '../../commons'

const PaginationContainer = styled.div`
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-template-columns: ${({ next, post, prev }) =>
    next && post && prev ? 'repeat(2, 1fr)' : next || prev ? '1fr' : '1fr'};
  justify-items: center;
  padding: 1em 0;
`

const PaginateLink = ({ icon, label, to }) =>
  to ? (
    <Link href={to} label={label}>
      <Icon icon={icon} size="2x" />
    </Link>
  ) : null

PaginationContainer.displayName = 'PaginationContainer'
PaginationContainer.propTypes = {
  next: bool,
  post: bool,
  prev: bool
}
PaginateLink.propTypes = {
  label: string.isRequired,
  to: string
}

export { PaginateLink, PaginationContainer }
