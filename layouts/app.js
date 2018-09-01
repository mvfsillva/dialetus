'use strict'

// Packages
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// Components
import Header from '../components/header'
import Footer from '../components/footer'

// UI
import Row from '../ui/row'

const App = ({ children }) => {
  return (
    <main>
      <Head>
        <title>Create Tools App 🦄</title>
      </Head>

      <Header />

      <section>
        <Row>{children}</Row>
      </section>

      <Footer />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Avenir Next', 'SF UI Display', 'Helvetica Neue',
            'Helvetica', 'Arial', 'sans-serif';
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        main {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }

        section {
          display: flex;
          align-items: center;
          flex-direction: row;
          text-align: center;
          width: 100%;
          height: calc(100vh - 200px);
        }
      `}</style>
    </main>
  )
}

App.propTypes = {
  children: PropTypes.any.isRequired
}

export default App
