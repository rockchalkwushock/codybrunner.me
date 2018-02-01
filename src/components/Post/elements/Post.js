import styled from 'styled-components'

const Post = styled.article`
  background-color: ${({ theme }) => theme.post.bg};
  display: flex;
  flex-direction: column;
  max-width: 736px;
  padding: 1.5em;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    margin: 3em auto;
    padding: 2em;
  }
`

Post.displayName = 'Post'

export default Post
