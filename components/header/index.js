import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
  width: 100%;
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.medium};
  padding-bottom: ${({ theme }) => theme.spacing.medium};

  h1 {
    padding: ${({ theme }) => theme.spacing};
  }

  @media ${({ theme }) => theme.responsive.smallphone} {
    h1 {
      text-align: center;
    }
  }
`

const Header = ({ headline }) => (
  <Wrapper>
    <h1>{headline}</h1>
  </Wrapper>
)

Header.defaultProps = {
  headline: 'Dialetus'
}

Header.propTypes = {
  headline: PropTypes.string
}

export default Header
