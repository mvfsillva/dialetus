import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/header'
import Footer from '../../components/footer'

import FullContainer from '../../styles/full-container'
import Main from '../../styles/main'

const Page = ({ children }) => (
  <FullContainer>
    <Header headline="Dialetos Brasileiros" />
    <Main>
      {children}
    </Main>
    <Footer />
  </FullContainer>
)

Page.propTypes = {
  children: PropTypes.any.isRequired
}

export default Page
