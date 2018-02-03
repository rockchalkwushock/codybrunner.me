import React from 'react'
import { arrayOf, shape, string } from 'prop-types'

import { TagsView } from '../components'

const TagsTemplate = ({ pathContext }) => <TagsView tags={pathContext.tags} />

TagsTemplate.propTypes = {
  pathContext: shape({
    tags: arrayOf(string).isRequired
  }).isRequired
}

export default TagsTemplate
