import React from 'react'

import { FlexContainer, Heading } from '../../commons'

const Header = FlexContainer.withComponent('header')
const PostDate = Heading.withComponent('h4')
const PostMeta = Heading.withComponent('h4')
const PostTitle = Heading.extend`
  text-align: center;
`

Header.displayName = 'PostHeader'
PostDate.displayName = 'PostDate'
PostMeta.displayName = 'PostMeta'
PostTitle.displayName = 'PostTitle'

const PostHeader = ({ about, date, time, title, words }) => (
  <Header>
    <PostTitle>{title}</PostTitle>
    <PostDate>{about ? `Last Updated: ${date}` : date}</PostDate>
    {about ? null : <PostMeta>{`${time} minutes • ${words} words`}</PostMeta>}
  </Header>
)

export default PostHeader
