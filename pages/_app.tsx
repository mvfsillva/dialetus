import { AppProps } from 'next/app'
import Head from 'next/head'

import { ghostTheme, GlobalStyles } from '~/theme'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
          <title>Dialetus</title>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Dicionário informal sobre os dialetos das regiões brasileiras."
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
    </>
  )
}
