import React from 'react'

import { CardContainer, CardDate, CardInfo, CardTitle } from './elements'

const Card = ({ date, info, title }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardDate>{date}</CardDate>
    <CardInfo>{info}</CardInfo>
  </CardContainer>
)

export default Card
