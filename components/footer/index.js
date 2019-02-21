import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.footer`
  margin-top: ${({theme}) => theme.spacing.xLarge};
  margin-bottom: ${({theme}) => theme.spacing.xLarge};
  text-align: center;
  width: 100%;

  p {
    display: inline-block;
    padding: ${({theme}) => theme.spacing};
    font-weight: 300;
    font-style: normal;
    color: ${({theme}) => theme.palette.primary.fallback};
    margin: 0;
  }
`

const Footer = ({ info }) => (
  <Wrapper>
    <p>{info}</p>
  </Wrapper>
)

Footer.defaultProps = {
  info: `@mvfsillva © ${new Date().getUTCFullYear()}`
}

Footer.propTypes = {
  info: PropTypes.string
}

export default Footer
