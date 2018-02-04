import React from 'react'
import { arrayOf, string } from 'prop-types'

import List from './List'
import Tag from './Tag'

const Tags = ({ tags }) => (
  <List gap={8} tags>
    {tags.map(t => (
      <Tag
        aria-label={`posts for ${t}`}
        key={t}
        to={`/tags/${t.toLowerCase()}`}
      >
        {t.toLowerCase()}
      </Tag>
    ))}
  </List>
)

Tags.propTypes = {
  tags: arrayOf(string).isRequired
}

export default Tags
