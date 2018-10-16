import React from 'react'
import { bool } from 'prop-types'
import styled, { css } from 'styled-components'

const RightArrow = styled.span`
  font-size: 2rem;
  color: #7e7e7e;

  ${props => props.right && css`
    &::after {
      content: '\u2190';
    }
  `}

  ${props => props.left && css`
    &::after {
      content: '\u2192';
    }
  `}
`

const Arrow = ({ right, left }) => <RightArrow right={ right } left={ left } />

Arrow.propTypes = {
  right: bool,
  left: bool
}

Arrow.defaultProps = {
  right: true,
  left: false
}

export default Arrow
