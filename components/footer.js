'use strict'

// Packages
import React from 'react'

const Header = () => {
  return (
    <footer>
      <p>Made with 🖤 by squad tools 🦄</p>

      <style jsx>{`
        footer {
          text-align: center;
          height: 100px;
          line-height: 100px;
        }

        p {
          color: #b2b6bf;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 12px;
          text-decoration: none;
          letter-spacing: 4px;
          margin-right: 10px;
          transition: 0.25s;
        }
      `}</style>
    </footer>
  )
}

export default Header
