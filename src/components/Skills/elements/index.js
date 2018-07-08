import styled from 'styled-components'

const SkillsList = styled.ul`
  display: grid;
  grid-gap: 0.625rem;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin: 0.75rem auto;
  max-width: 56.25rem;
  text-align: center;
`

const SkillItem = styled.li``

export { SkillItem, SkillsList }
