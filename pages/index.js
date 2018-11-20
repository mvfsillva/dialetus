import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import Brazil from 'components/brazil'
import Footer from 'components/footer'

import Section from 'layouts/section'

import { Router } from '../routes'

const Main = styled.main`
  display: flex;
  justify-content: center;

  padding-top: 56px;
  padding-bottom: 56px;
`

class Home extends PureComponent {
  getDialect = region => Router.pushRoute('dialect', { slug: region })

  render () {
    return (
      <Section>
        <Header headline="Dialetos Brasileiros" />
        <Main>
          <Brazil handleSelected={this.getDialect} />
        </Main>
      </Section>
    )
  }
}

export default Home
