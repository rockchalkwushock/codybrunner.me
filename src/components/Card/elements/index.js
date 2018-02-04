import styled from 'styled-components'
import { bool } from 'prop-types'

import { Heading, Text } from '../../commons'

const Card = styled.div`
  background-color: ${({ theme }) => theme.site.bg};
  border: ${({ draft }) => (draft ? '6px dashed red' : 'none')};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  padding: 1em;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    width: 60%;
  }
`

const CardDate = Heading.withComponent('h4').extend`
  padding-bottom: 0.5em;
`
const CardExcerpt = Text.extend`
  text-align: justify;
`
const CardTitle = Heading.withComponent('h2')

Card.propTypes = {
  draft: bool.isRequired
}
Card.displayName = 'Card'
CardDate.displayName = 'Date'
CardExcerpt.displayName = 'Excerpt'
CardTitle.displayName = 'Title'

export { Card, CardDate, CardExcerpt, CardTitle }
