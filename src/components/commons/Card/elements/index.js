import styled from 'styled-components'

const CardContainer = styled.div`
  border: 1px solid black;
  padding: 1rem;
  margin: 0.75rem 0;
`

const CardTitle = styled.h1`
  margin: unset;
`

const CardDate = styled.h5`
  margin: unset;
  padding-top: 0.5rem;
`

const CardInfo = styled.p`
  margin: unset;
  padding-top: 1rem;
`

export { CardContainer, CardDate, CardInfo, CardTitle }
