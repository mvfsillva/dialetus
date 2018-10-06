import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'
import { transitions } from 'polished'
import { transition } from 'mixins/transition'

const Panel = styled.div`
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.gray.lighter};
  box-shadow: ${p => p.theme.colors.shadow.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  ${transitions(transition({ property: 'box-shadow', duration: '950ms' }))};
  cursor: pointer;
  margin: 20px;
  text-align: center;

  &:hover,
  &:focus {
    box-shadow: ${p => p.theme.colors.shadow.medium};
  }

  &.small {
    width: 300px;
    height: 300px;
  }

  &.medium {
    width: 400px;
    height: 400px;
  }

  &.large {
    width: 500px;
    height: 500px;
  }
`

const Card = ({ children, size }) => {
  const classname = classnames({
    small: size === 'small',
    medium: size === 'medium',
    large: size === 'large',
  })

  return  (
    <Panel className={classname} size={size}>{children}</Panel>
  )
}

Card.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Card.defaultProps = {
  size: 'small'
}

export default Card
