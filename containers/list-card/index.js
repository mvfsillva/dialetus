import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from 'components/card'

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  align-items: center;
`

const ListCard = ({ data }) => (
  <Container>
    {data.map((i) => (
      <Card key={i} size="medium">Barril Dobrado</Card>
    ))}
  </Container>
)

ListCard.propTypes = {
  data: PropTypes.array
}

ListCard.defaultProps = {
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

export default ListCard
