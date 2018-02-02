import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import { string } from 'prop-types'

const Disqus = props => (
  <ReactDisqusComments
    shortname={props.shortname}
    identifier={props.title}
    title={props.title}
    url={props.url}
  />
)

Disqus.propType = {
  shortname: string.isRequired,
  title: string.isRequired,
  url: string.isRequired
}

export default Disqus
