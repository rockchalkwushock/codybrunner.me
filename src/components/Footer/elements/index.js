import styled from 'styled-components'

const Footer = styled.footer`
  background-color: lightcoral;
  padding: 1.5rem 0;
  width: 100%;
`

const FooterList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: unset;
  padding: unset;
`

const FooterItem = styled.li`
  padding: 0.25rem 0;
`

export { Footer, FooterItem, FooterList }
