import React, { Component } from 'react'
import { debounce } from 'throttle-debounce'
import PropTypes from 'prop-types'
import { If } from 'react-extras'
import Head from 'next/head'

import { Card, PageTitle, Navigation, Search, Loading } from '../components'
import Page from '../layouts/default'

import api from '../services'

class Home extends Component {
  static async getInitialProps() {
    try {
      const data = await api('/regions')
      return { region: data }
    }  catch (error) {
      console.error(error)
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      regionName: 'baianes',
      dialects: [],
      loading: false
    }
  }

  componentDidMount() {
    this.getDialect(this.state.regionName)
  }

  handleRegionClick = name => this.getDialect(name)

  getDialect = async region => {
    this.setState({ loading: true })
    const data = await api(`/regions/${region}/dialects`)
    this.setState({ dialects: data, regionName: region, loading: false })
  }

  handleChange = e => {
    const query = e.target.value
    this.setState({ loading: true })

    if (query.length >= 3)
      return debounce(1000, () => this.filterDialect(query))()

    return this.getDialect(this.state.regionName)
  }

  filterDialect = query => {
    const { dialects } = this.state
    this.setState({ loading: true })

    const filtered = dialects.filter(({ dialect }) => {
      const str = dialect.toLowerCase()
      return str.includes(query.toLowerCase())
    })

    this.setState({ dialects: filtered, loading: false })
  }

  render () {
    const { dialects, regionName, loading } = this.state
    const { region } =  this.props
    const regionNameCap = regionName[0].toUpperCase() + regionName.slice(1)

    return (
      <>
        <Head>
          <title> Dialetus - {regionNameCap} </title>
        </Head>
        <Page>
          <Navigation regions={region} onClick={this.handleRegionClick} />
          <PageTitle title={regionName} />
          <Search onChange={this.handleChange} placeholder="Digite um dialeto" />
          <If condition={loading} render={() => <Loading />} />
          <Card data={dialects} />
        </Page>
      </>
    )
  }
}

Home.defaultProps = {
  region: []
}

Home.propTypes = {
  region: PropTypes.array
}

export default Home
