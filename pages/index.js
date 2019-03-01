import React, { Component } from 'react'
import { debounce } from 'throttle-debounce'
import PropTypes from 'prop-types'
import { If } from 'react-extras'

import Card from 'components/card'
import PageTitle from 'components/page-title'
import Navigation from 'components/navigation'
import Search from 'components/search'
import Loading from 'components/loading'
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

  constructor() {
    super()
    this.state = {
      regionName: 'baianes',
      dialects: [],
      loading: false
    }
  }

  componentDidMount() {
    this.getDialect(this.state.regionName)
    this.serviceWorker()
  }

  serviceWorker = async () => {
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.info('service worker registration successful'))
        .catch(err => console.error('service worker registration failed', err.message))
    }
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

    return (
      <Page>
        <Navigation regions={region} onClick={this.handleRegionClick} />
        <PageTitle title={regionName} />
        <Search onChange={this.handleChange} />
        <If condition={loading} render={() => <Loading />} />
        <Card data={dialects} />
      </Page>
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
