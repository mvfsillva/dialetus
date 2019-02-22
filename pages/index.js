import React, { Component } from 'react'
import { debounce } from 'throttle-debounce'

import Page from '../layouts/default'
import Card from 'components/card'
import PageTitle from 'components/page-title'
import Navigation from 'components/navigation'
import Search from 'components/search'

import api from '../services'

class Home extends Component {
  static async getInitialProps (ctx) {
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
      dialects: []
    }
  }

  componentDidMount() {
    this.getDialect(this.state.regionName)
  }

  handleRegionClick = name => this.getDialect(name)

  getDialect = async region => {
    const data = await api(`/regions/${region}/dialects`)
    this.setState({ dialects: data, regionName: region })
  }

  handleChange = e => {
    const query = e.target.value

    if (query.length >= 3)
      return debounce(1000, () => this.filterDialect(query))()

    return this.getDialect(this.state.regionName)
  }

  filterDialect = query => {
    const { dialects } = this.state
    const filtered = dialects.filter(({ dialect }) => {
      const str = dialect.toLowerCase()
      return str.includes(query.toLowerCase())
    })

    this.setState({ dialects: filtered })
  }

  render () {
    const { dialects, regionName } = this.state
    const { region } =  this.props

    return (
      <Page>
        <Navigation regions={region} onClick={this.handleRegionClick} />
        <PageTitle title={regionName} />
        <Search onChange={this.handleChange} />
        <Card data={dialects} />
      </Page>
    )
  }
}

export default Home
