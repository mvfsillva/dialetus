import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Brazil from 'components/brazil'
import Footer from 'components/footer'

import { Router } from '../routes'

const Main = styled.main`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Home extends PureComponent {
  getDialect = region => Router.pushRoute('dialect', { slug: region })

  render () {
    return (
      <Fragment>
        <Header headline="Dialetos Brasileiros" />
        <Main>
          <Brazil handleSelected={this.getDialect} />
        </Main>
        <Footer />
      </Fragment>
    )
  }
}

export default Home
