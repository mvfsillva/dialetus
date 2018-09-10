import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  border: 1px solid;
`
const StyledTitle = styled.h1`
  ${p => p.theme.typography.hero};
  color: ${p => p.theme.colors.black.darker};
  letter-spacing: 5px;
  font-weight: 100;
`
const StyledSpan = styled.span`
  color: ${p => p.theme.colors.gray.lighter};
  ${p => p.theme.typography.hero};
  font-weight: 100;
`

const Header = ({ headline, dialect }) => (
  <StyledHeader>
    <StyledTitle>
      {headline}:<StyledSpan>{dialect}</StyledSpan>
    </StyledTitle>
  </StyledHeader>
)

Header.propTypes = {
  headline: PropTypes.string.isRequired,
  dialect: PropTypes.string.isRequired,
}

export default Header
