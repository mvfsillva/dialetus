import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '../../theme/default'
import SearchIcon from '../../icons/search'

const Wrapper = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
  input {
    background-color: ${theme.palette.white};
    padding: ${theme.spacing};
    color: ${theme.palette.primary.fallback};
    outline: snow;
    font-size: 1.5rem;
    border: 0;
    border-radius: ${theme.radius};
    width: 100%;
  }
  svg {
    position: absolute;
    right: ${theme.spacing.medium};
  }
`

const Search = ({ onChange, onSubmit, placeholder }) => (
  <Wrapper onSubmit={onSubmit}>
    <input type="text" name="dialect" onChange={onChange} placeholder={placeholder} />
    <SearchIcon />
  </Wrapper>
)

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Search
