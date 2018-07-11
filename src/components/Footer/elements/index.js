import styled from 'styled-components'

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem 0;
  width: 100%;
`

const FooterList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: ${({ theme }) => theme.reset};
  padding: ${({ theme }) => theme.reset};
`

const FooterItem = styled.li`
  margin: ${({ theme }) => theme.reset};
  padding: 0.25rem 0;
`

export { Footer, FooterItem, FooterList }
