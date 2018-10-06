import React, { PureComponent, Fragment } from 'react'

import api from 'services'

import Header from 'components/header'
import Footer from 'components/footer'
import ListCard from 'containers/list-card'

class Dialect extends PureComponent {
  static async getInitialProps (ctx) {
    const data = await api(`/dialect/${ctx.query.slug}`)
    return { dialect: ctx.query.slug, dialects: data }
  }

  render () {
    const { dialects, dialect } =  this.props

    return (
      <Fragment>
        <Header headline={dialect} uppercase />
        <ListCard data={dialects} />
        <Footer />
      </Fragment>
    )
  }
}

export default Dialect
