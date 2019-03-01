import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import pkg from '../package'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
    })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
  }

  async componentDidMount() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/service-worker.js')
      } catch (error) {
        console.warn('service worker registration failed', error.message)
      }
    }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content={props => props.theme.palette.primary} />
          <meta name="description" content={pkg.description} />
          <meta name="keywords" content={pkg.keywords} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mvfsillva" />
          <meta name="twitter:creator" content="@mvfsillva" />
          <meta name="twitter:title" content={pkg.name} />
          <meta name="twitter:description" content={pkg.description} />
          <link rel="shortcut icon" href="static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
          <link rel="manifest" href="static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }

}

export default MyDocument
