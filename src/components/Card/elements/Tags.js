import React from 'react'
import styled from 'styled-components'
import { arrayOf, string } from 'prop-types'

import { Link } from '../../commons'

const Tag = styled.button`
  background-color: ${({ theme }) => theme.site.fg};
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin: 0.25em 0.5em;
  outline: none;
  padding: 0.25em 0.5em;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`

const CardTags = ({ tags }) =>
  tags.map(t => (
    <Tag key={t}>
      <Link href={`/tags/${t}`} text={t} />
    </Tag>
  ))

CardTags.propTypes = {
  tags: arrayOf(string).isRequired
}
export { Tag }
export default CardTags
