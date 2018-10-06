import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import If from 'utils/if'

const StyledHeader = styled.header`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
`
const StyledTitle = styled.h1`
  ${p => p.theme.typography.hero};
  color: ${p => p.theme.colors.black.darker};
  letter-spacing: 5px;
  font-weight: 100;
  text-transform: ${p => p.uppercase ? 'uppercase' : 'captilize'};

  span {
    color: ${p => p.theme.colors.gray.lighter};
    ${p => p.theme.typography.hero};
    font-weight: 100;
  }
`

const Header = ({ headline, dialect, uppercase }) => (
  <StyledHeader>
    <StyledTitle uppercase={uppercase}>
      {headline}<If test={!!dialect}>:<span>{dialect}</span></If>
    </StyledTitle>
  </StyledHeader>
)

Header.propTypes = {
  headline: PropTypes.string.isRequired,
  dialect: PropTypes.string,
  uppercase: PropTypes.bool,
}

Header.defaultProps = {
  uppercase: false,
}

export default Header
