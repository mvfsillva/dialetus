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

    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    font-family: sans-serif;
    text-size-adjust: 100%;
    background: #ffffff;
  }

  a {
    text-decoration: none;
  }

  .brazil {
    cursor: pointer;
    fill: #FFFFFF;
  }

  .brazil:hover {
    fill: #000000;
    transition: 0.1s linear;
  }
`
export default injectGlobalStyles
