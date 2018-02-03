import React from 'react'
import { array, arrayOf, shape } from 'prop-types'

import { TagsView } from '../components'

const TagsTemplate = ({ pathContext }) => <TagsView tags={pathContext.tags} />

TagsTemplate.propTypes = {
  pathContext: shape({
    tags: arrayOf(array).isRequired
  }).isRequired
}

export default TagsTemplate
