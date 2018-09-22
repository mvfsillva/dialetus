import React from 'react'
import styled from 'styled-components'

import Header from 'components/header'
import ListCard from 'container/list-card'
import Brazil from 'components/brazil'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin: 50px;
`

const Home = () => (
  <Container>
    <Brazil />
  </Container>
)

export default Home
