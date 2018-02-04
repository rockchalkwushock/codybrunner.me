import { injectGlobal } from 'styled-components'

/**
 * @fileOverview
 * Global Styling for application.
 *
 * NOTE: rem is figured from <html /> font-size.
 */

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
