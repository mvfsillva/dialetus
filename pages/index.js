import React, { Component } from 'react'

import Page from '../layouts/default'
import Card from 'components/card'
import PageTitle from 'components/page-title'
import Search from 'components/search'

class Home extends Component {
  render () {
    return (
      <Page>
        <PageTitle title="Baianês" />
        <Search />
        <Card />
      </Page>
    )
  }
}

export default Home
