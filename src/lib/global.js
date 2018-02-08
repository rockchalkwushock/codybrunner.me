import { injectGlobal } from 'styled-components'

/**
 * @fileOverview
 * Global Styling for application.
 *
 * NOTE: rem is figured from <html /> font-size.
 * NOTE:
 * `require(font)` is necessary for Gatsby's webpack config
 * thanks to @mxstbr for his help in debugging this!
 */

export default injectGlobal`

@font-face {
  font-family: 'Raleway';
  src: url(${require('../fonts/Raleway-Regular.ttf')});
}

*,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  html {
    font-size: 1em;
  }

  body {
    background-color: #7a9eb1;
    min-height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
  }
`
