'use strict'

// Packages
import React from 'react'
import PropTypes from 'prop-types'

const ButtonLink = ({ children, style, outline, href }) => {
  const classnames = outline ? 'outline' : ''

  return (
    <a href={href} className={classnames} style={style}>
      {children}

      <style jsx>{`
        a {
          background-color: #06091f;
          border-radius: 3px;
          font-weight: 600;
          color: #fff;
          text-align: center;
          padding: 12px 20px;
          cursor: pointer;
          border: none;
          font-size: 14px;
          display: inline-block;
          text-decoration: none;
          transition: 0.2s;
        }

        a:hover {
          opacity: 0.85;
        }

        .outline {
          background-color: transparent;
          color: #06091f;
        }
      `}</style>
    </a>
  )
}

ButtonLink.defaultProps = {
  outline: false
}

ButtonLink.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
  outline: PropTypes.bool,
  href: PropTypes.string.isRequired
}

export default ButtonLink
