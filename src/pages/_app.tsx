import Head from 'next/head'
import { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global-styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#19E68C" />
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-32.png"
          sizes="32x32"
        />
        <link rel="manifest" href="/manifest" />
      </Head>
      <NextSeo
        title="Dialetus"
        description="Dicionario informal com dialetos brasileiros."
        canonical="https://dialetus.com"
        openGraph={{
          url: 'https://dialetus.com',
          title: 'Dialetus',
          description: 'Dicionario informal com dialetos brasileiros.',
          images: [{ url: 'https://dialetus.com/images/frame.png' }],
          site_name: 'Dialetus',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@mvfsillva',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
