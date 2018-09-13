import { injectGlobal } from 'styled-components'

const injectGlobalStyles = () =>
injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir Next, SF UI Display, Helvetica Neue, Helvetica, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background-color: #fff;

    &::after,
    &::before {
      box-sizing: inherit;

    }
  }

  html {
    box-sizing: border-box;
    font-family: sans-serif;
    text-size-adjust: 100%;
  }

  a {
    text-decoration: none;
  }
`
export default injectGlobalStyles
