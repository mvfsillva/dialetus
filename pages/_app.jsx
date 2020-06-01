import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import { ghostTheme, StyledGlobal } from '~/theme'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="aplication-name" content="Dialetus" />
          <title>Dialetus</title>
        </Head>
        <StyledGlobal />
        <ThemeProvider theme={ghostTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
