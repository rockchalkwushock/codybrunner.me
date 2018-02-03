import { InternalLink } from './Link'

// TODO: Make a better transition for the user to know what to do.

const Tag = InternalLink.extend`
  align-items: center;
  background-color: ${({ theme }) => theme.site.fg};
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  display: flex;
  font-size: 0.7rem;
  justify-content: center;
  letter-spacing: 1px;
  outline: none;
  padding: 0.25em 0.5em;
  transition: all 0.3s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.site.linkClr};
  }
`

Tag.displayName = 'Tag'

export default Tag
