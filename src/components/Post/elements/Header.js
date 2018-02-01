import React from 'react'
import styled from 'styled-components'
import {} from 'prop-types'

const Header = styled.header``
const PostDate = styled.h4``
const PostMeta = styled.h4``
const PostTitle = styled.h1``

Header.displayName = 'Header'
PostDate.displayName = 'Date'
PostMeta.displayName = 'Meta'
PostTitle.displayName = 'Title'

const PostHeader = ({ date, time, title, words }) => (
  <Header>
    <PostTitle>{title}</PostTitle>
    <PostDate>{date}</PostDate>
    <PostMeta>{`${time} minutes • ${words} words`}</PostMeta>
  </Header>
)

export default PostHeader
