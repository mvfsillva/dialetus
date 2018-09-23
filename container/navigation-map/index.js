import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Brazil from 'components/brazil'
import Header from 'components/header'

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-direction: column;
`
const NavigationMap = ({ onclick }) => (
  <Fragment>
    <Header headline="Dialetus" />
    <Container>
      <Brazil />
    </Container>
  </Fragment>
)

NavigationMap.propTypes = {
  onclick: PropTypes.func
}

export default NavigationMap
