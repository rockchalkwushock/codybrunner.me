import React from 'react'

import Link from '../Link'
import {
  CardContainer,
  CardDate,
  CardInfo,
  CardLinks,
  CardTitle
} from './elements'

const Card = ({ alt, date, href, info, src, title }) => (
  <CardContainer alt={alt}>
    <CardTitle alt={alt}>{title}</CardTitle>
    {href && src ? null : <CardDate alt={alt}>{date}</CardDate>}
    <CardInfo alt={alt}>{info}</CardInfo>
    {href && src ? (
      <CardLinks>
        <Link alt ext href={src}>
          Source
        </Link>
        <Link alt ext href={href}>
          Live
        </Link>
      </CardLinks>
    ) : null}
  </CardContainer>
)

export default Card
