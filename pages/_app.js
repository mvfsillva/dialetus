import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../theme/default'
import GlobalStyle from '../theme/global-style'

class MyApp extends App {
  static async getInitialProps({ Component, _, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
