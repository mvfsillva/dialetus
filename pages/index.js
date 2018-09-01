'use strict'

// Packages
import React from 'react'

// Layouts
import App from '../layouts/app'

// UI
import ButtonLink from '../ui/button-link'

const Home = () => {
  return (
    <App>
      <h1>Create Tools App 🦄</h1>
      <p>Create Tools apps in one command</p>

      <ButtonLink
        href="https://idwall.atlassian.net/wiki/spaces/TOO/pages/66060413/Documenta+o+t+cnica"
        style={{ marginTop: '30px' }}
      >
        Check docs
      </ButtonLink>

      <ButtonLink
        href="https://github.com/idwall/create-tools-app/tree/master/examples"
        outline={true}
        style={{ marginTop: '30px' }}
      >
        See more examples
      </ButtonLink>

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

export default Home
