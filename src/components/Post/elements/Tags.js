import React from 'react'
import styled from 'styled-components'
import { arrayOf, string } from 'prop-types'

import Link from '../../Link'
import { Tag } from '../../Card'

const Tags = styled.ul`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
`

Tags.displayName = 'Tags'

const PostTags = ({ tags }) => (
  <Tags>
    {tags.map(t => (
      <Tag key={t}>
        <Link href={`/tags/${t}`} text={t} />
      </Tag>
    ))}
  </Tags>
)

PostTags.propTypes = {
  tags: arrayOf(string).isRequired
}

export default PostTags
