import React from 'react'
import { arrayOf, string } from 'prop-types'

import { Tag } from '../../commons'

const CardTags = ({ tags }) =>
  tags.map(tag => (
    <Tag key={tag} to={`/tags/${tag}`}>
      {tag}
    </Tag>
  ))

CardTags.propTypes = {
  tags: arrayOf(string).isRequired
}

export default CardTags
