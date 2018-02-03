import { InternalLink } from './Link'

const Tag = InternalLink.extend`
  align-items: center;
  background-color: ${({ theme }) => theme.site.fg};
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  letter-spacing: 1px;
  margin: 0.25em 0.5em;
  outline: none;
  padding: 0.25em 0.5em;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.site.linkClr};
  }
`

Tag.displayName = 'Tag'

export default Tag
