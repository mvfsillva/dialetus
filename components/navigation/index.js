import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  button {
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    transition: all 0.5s ease-in-out;
    font-size: 16px;
    margin: ${({ theme }) => theme.spacing};
    text-transform: capitalize;

    color: ${({ theme }) => theme.palette.primary};
    background-color: transparent;
    border: none;
    &:hover {
      color: ${({ theme }) => theme.palette.primary.fallback};
      background-color: transparent;
      border: none;
    }
  }
`

const Navigation = ({ regions, onClick }) => {
  return (
    <Wrapper>
      {regions.map(({ name }) =>
        <button key={name} onClick={() => onClick(name)}>{name}</button>
      )}
    </Wrapper>
  )
}

Navigation.defaultProps = {
  regions: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

Navigation.propTypes = {
  regions: PropTypes.array,
  onClick: PropTypes.func
}

export default Navigation
