import React from 'react'
import styled from 'styled-components'
import { transitions } from 'polished'
import { transition } from 'mixins/transition'

const Panel = styled.div`
  width: 320px;
  height: 380px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.gray.lighter};
  box-shadow: ${p => p.theme.colors.shadow.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  ${transitions(transition({ property: 'box-shadow', duration: '950ms' }))};

  margin: 20px;
  text-align: center;

  &:hover,
  &:focus {
    box-shadow: ${p => p.theme.colors.shadow.medium};
  }
`

const Card = () => (
  <Panel>card</Panel>
)

export default Card
