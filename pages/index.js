import React, { Fragment } from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Brazil from 'components/brazil'
import Footer from 'components/footer'

const Main = styled.main`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => (
  <Fragment>
    <Header headline="Dialetos pelo Brasil" />
    <Main>
      <Brazil />
    </Main>
    <Footer />
  </Fragment>
)

export default Home
