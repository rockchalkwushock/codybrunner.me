import { injectGlobal } from 'styled-components'

export default injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
  }
`
