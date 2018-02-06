import { InternalLink } from './Link'

const Tag = InternalLink.extend`
  align-items: center;
  background-color: ${({ theme }) => theme.site.fg};
  border: none;
  border-radius: ${({ theme }) => theme.site.borderRadius};
  box-shadow: ${({ theme }) => theme.site.shadow};
  cursor: pointer;
  display: flex;
  font-size: 0.7rem;
  justify-content: center;
  letter-spacing: 1px;
  outline: none;
  padding: 0.25em 0.5em;
  transition: ${({ theme }) => theme.site.transition};
  :hover {
    color: ${({ theme }) => theme.site.linkClr};
    box-shadow: unset;
  }
`

Tag.displayName = 'Tag'

export default Tag
