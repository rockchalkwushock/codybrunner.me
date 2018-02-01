import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.site.bg};
  color: ${({ theme }) => theme.site.ftClr};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.site.ftFm};
  font-size: ${({ theme }) => theme.site.ftSz};
  font-weight: ${({ theme }) => theme.site.ftWt};
  letter-spacing: ${({ theme }) => theme.site.ltSp};
  line-height: ${({ theme }) => theme.site.lnHt};
  margin: 0 auto;
  min-height: 100vh;
  max-width: 900px;
`

Wrapper.displayName = 'Wrapper'

export default Wrapper
