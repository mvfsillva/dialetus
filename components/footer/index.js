import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.footer`
  margin-top: ${({theme}) => theme.spacing.xLarge};
  margin-bottom: ${({theme}) => theme.spacing.xLarge};
  text-align: center;
  width: 100%;

  a {
    display: inline-block;
    padding: ${({theme}) => theme.spacing};
    font-weight: 300;
    font-style: normal;
    color: ${({theme}) => theme.palette.primary.fallback};
    margin: 0;
    text-decoration: none;
  }
`

const Footer = ({ info, href }) => (
  <Wrapper>
    <a href={href} rel="noopener noreferrer">{info}</a>
  </Wrapper>
)

Footer.defaultProps = {
  info: `@mvfsillva © ${new Date().getUTCFullYear()}`,
  href: 'https://github.com/mvfsillva'
}

Footer.propTypes = {
  info: PropTypes.string,
  href: PropTypes.string
}

export default Footer
