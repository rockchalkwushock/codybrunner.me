import styled from 'styled-components'
import { bool } from 'prop-types'

const Post = styled.article`
  background-color: ${({ theme }) => theme.post.bg};
  border: ${({ draft }) => (draft ? '6px dashed red' : 'none')};
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.7);
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
Post.propTypes = {
  draft: bool.isRequired
}

export default Post
