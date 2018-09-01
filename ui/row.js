'use strict'

// Packages
import React from 'react'
import PropTypes from 'prop-types'

const Row = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          width: 100%;
          max-width: 1000px;
          padding-left: 20px;
          padding-right: 20px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.any.isRequired
}

export default Row
