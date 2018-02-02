import React from 'react'
import { arrayOf, shape, string } from 'prop-types'

import { Tags } from '../components'

const TagsTemplate = ({ pathContext }) => <Tags tags={pathContext.tags} />

TagsTemplate.propTypes = {
  pathContext: shape({
    tags: arrayOf(string).isRequired
  }).isRequired
}

export default TagsTemplate
