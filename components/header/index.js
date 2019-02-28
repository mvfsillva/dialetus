import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transitions, darken } from 'polished'

import { transition } from '../../mixins/transition'

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
  width: 100%;
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.medium};
  padding-bottom: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    padding: ${({ theme }) => theme.spacing};
  }


  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.fallback};
    background-color: ${({ theme }) => theme.palette.white};
    padding: ${({ theme }) => theme.spacing};
    margin-right: ${({ theme }) => theme.spacing.medium};
    border-radius: ${({ theme}) => theme.radius};

    ${transitions([
      transition({ property: 'background-color', duration: '250ms' }),
      transition({ property: 'color', duration: '250ms' })
    ])};

    &:hover {
      color: ${({ theme }) => darken(0.2, `${theme.palette.primary.fallback}`)};
      background-color: ${({ theme }) => darken(0.2, `${theme.palette.white}`)};

      ${transitions([
        transition({ property: 'background-color', duration: '250ms' }),
        transition({ property: 'color', duration: '250ms' })
      ])};
    }
  }

  @media ${({ theme }) => theme.responsive.phone} {
    h1 {
     margin: auto;
    }

    a {
      display: none;
    }
  }
`

const Header = ({ headline, href }) => (
  <Wrapper>
    <h1>{headline}</h1>
    <a href={href} rel="noopener noreferrer" target="_blank">Contribua</a>
  </Wrapper>
)

Header.defaultProps = {
  headline: 'Dialetus',
  href: 'https://github.com/mvfsillva/dialetus-service'
}

Header.propTypes = {
  headline: PropTypes.string,
  href: PropTypes.string
}

export default Header
