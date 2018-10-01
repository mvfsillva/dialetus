import React, { PureComponent, Fragment } from 'react'

import api from 'services'

import Header from 'components/header'
import Footer from 'components/footer'
import ListCard from 'containers/list-card'

class Dialect extends PureComponent {
  static async getInitialProps (ctx) {
    const { dialetus } = await api('/dialect')
    console.log(dialetus)
    return { dialetus, dialect: ctx.query.slug }
  }
  render () {
    const { dialect } =  this.props

    return (
      <Fragment>
        <Header headline="Bem vindo ao" dialect={dialect} />
        <ListCard />
        <Footer />
      </Fragment>
    )
  }
}

export default Dialect
