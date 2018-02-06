import styled from 'styled-components'
import { bool } from 'prop-types'

const Post = styled.article`
  background-color: ${({ theme }) => theme.post.bg};
  border: ${({ draft }) => (draft ? '6px dashed red' : 'none')};
  border-radius: ${({ theme }) => theme.site.borderRadius};
  box-shadow: ${({ theme }) => theme.site.shadow};
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
