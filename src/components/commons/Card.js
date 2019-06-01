import React from 'react'
import styled from 'styled-components'

import Link from './Link'

const CardContainer = styled.div`
  border: 1px solid
    ${({ alt, theme }) =>
      alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  padding: 1rem;
  margin: 0.75rem auto;
  max-width: ${({ theme }) => theme.maxWidth};
`

const CardTitle = styled.h1`
  color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  font-size: 1.55rem;
  margin: unset;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    font-size: 2rem;
  }
`

const CardDate = styled.h5`
  color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  margin: unset;
  padding-top: 0.5rem;
  text-align: center;
`

const CardInfo = styled.p`
  color: ${({ alt, theme }) =>
    alt === 'true' ? theme.colors.secondary : theme.colors.alt};
  margin: unset;
  padding-top: 0.5rem;
  text-align: center;
`

const CardLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.5rem;
`

export default ({ alt, date, href, info, src, title }) => (
  <CardContainer alt={alt}>
    <CardTitle alt={alt}>{title}</CardTitle>
    {href && src ? null : <CardDate alt={alt}>{date}</CardDate>}
    <CardInfo alt={alt}>{info}</CardInfo>
    {href && src ? (
      <CardLinks>
        <Link altClr ext href={src}>
          Source
        </Link>
        <Link altClr ext href={href}>
          Live
        </Link>
      </CardLinks>
    ) : null}
  </CardContainer>
)