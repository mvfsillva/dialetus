import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir Next, SF UI Display, Helvetica Neue, Helvetica, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: ${props => props.theme.colors.black};
  }
`
export default GlobalStyle
