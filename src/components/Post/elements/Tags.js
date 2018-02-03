import React from 'react'
import styled from 'styled-components'
import { arrayOf, string } from 'prop-types'

import { Tag } from '../../commons'

const Tags = styled.ul`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`

Tags.displayName = 'Tags'

const PostTags = ({ tags }) => (
  <Tags>
    {tags.map(tag => (
      <Tag key={tag} to={`/tags/${tag}`}>
        {tag}
      </Tag>
    ))}
  </Tags>
)

PostTags.propTypes = {
  tags: arrayOf(string).isRequired
}

export default PostTags
