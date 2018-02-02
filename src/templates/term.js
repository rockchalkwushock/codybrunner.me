import React from 'react'
import { arrayOf, bool, shape, string } from 'prop-types'

import { Term } from '../components'

// REVIEW: Weird propTypes error "checker not a function".

const TermTemplate = ({ pathContext }) => <Term {...pathContext} />

TermTemplate.propTypes = {
  pathContext: shape({
    tag: string.isRequired,
    taggedPosts: arrayOf(
      shape({
        excerpt: string.isRequired,
        fields: shape({
          slug: string.isRequired
        }).isRequired,
        frontmatter: {
          date: string.isRequired,
          draft: bool.isRequired,
          tags: arrayOf(string).isRequired,
          title: string.isRequired
        }
      })
    )
  })
}

export default TermTemplate
