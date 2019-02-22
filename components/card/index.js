import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.shadow.medium};
  color: ${({ theme }) => theme.palette.black};
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => theme.spacing.medium};
  max-width: 360px;
  margin: ${({ theme }) => theme.spacing.medium};

  h1, h2, h3 {
    margin-top: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing};
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.spacing.large};
    margin-bottom: ${({ theme }) => theme.spacing};
  }

  .center {
    text-align: center;
  }
`

const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.large};
`

const Card = ({ data }) => (
  <FlexWrap>
    {data.map((data, index) =>
      <Wrapper key={index}>
        <hgroup>
          <h2 className="center">Barril Dobrado</h2>
          <h3>Descrição:</h3>
        </hgroup>
        <p>apenas um exemplo de descrição</p>
        <div>
          <h3>Exemplos:</h3>
          <p>Porra esse pivete é barril dobrado!</p>
          <p>Aquele dia foi barril dobrado vei!</p>
        </div>
      </Wrapper>
	  )}
  </FlexWrap>
)

Card.defaultProps = {
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

Card.propTypes = {
  data: PropTypes.array
}

export default Card
