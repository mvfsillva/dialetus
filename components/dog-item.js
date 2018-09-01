'use strict'

// Packages
import React from 'react'
import PropTypes from 'prop-types'

const DogItem = ({ src }) => {
  return (
    <div style={{ backgroundImage: `url(${src})` }}>
      <style jsx>{`
        div {
          margin: 50px 20px;
          border-radius: 4px;
          display: inline-block;
          width: 200px;
          height: 200px;
          background-size: cover;
        }
      `}</style>
    </div>
  )
}

DogItem.propTypes = {
  src: PropTypes.string.isRequired
}

export default DogItem
