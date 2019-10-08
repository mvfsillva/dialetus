import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans, Helvetica Neue, Helvetica, sans-serif;
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

  /* https://cloudfour.com/thinks/see-no-evil-hidden-content-and-accessibility/ */
  .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`
export default GlobalStyle
