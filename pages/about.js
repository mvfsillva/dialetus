'use strict'

// Packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Layouts
import App from '../layouts/app'

// Components
import DogItem from '../components/dog-item'

// Services
import api from '../services/api'

class About extends Component {
  static async getInitialProps() {
    const dogs = await api('/feed')

    return { dogs }
  }

  render() {
    const { dogs } = this.props

    return (
      <App>
        <h1>About</h1>
        <p>OMG! This is an awesome about page (with fetch)</p>

        {dogs.list.slice(0, 4).map(dog => {
          return <DogItem src={dog} key={dog} />
        })}

        <style jsx>{`
          h1 {
            font-size: 50px;
            font-weight: 700;
            color: #23183d;
          }

          p {
            font-size: 22px;
            margin-top: 10px;
            font-weight: 500;
            color: #b2b6bf;
          }
        `}</style>
      </App>
    )
  }
}

About.propTypes = {
  dogs: PropTypes.object
}

export default About
