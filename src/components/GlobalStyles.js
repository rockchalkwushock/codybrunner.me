import {
  createGlobalStyle
} from 'styled-components'

export default createGlobalStyle `
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

  ul {
    margin: 0;
  }
`