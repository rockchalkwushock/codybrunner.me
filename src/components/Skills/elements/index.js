import styled from 'styled-components'

const SkillsList = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin: 0.75rem auto;
  max-width: 900px;
  text-align: center;
`

const SkillItem = styled.li``

export { SkillItem, SkillsList }
