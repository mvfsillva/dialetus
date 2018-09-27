import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { transitions } from 'polished'

import { transition } from 'mixins/transition'

const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  height: 100px;
  background: ${p => p.theme.colors.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  bottom: 0;
  ${transitions(transition({ property: 'hover', duration: '250ms' }))};

  span {
    ${p => p.theme.typography.body};
    color: ${p => p.theme.colors.gray};
    text-align: center;
    &:hover {
      color: ${p => p.theme.colors.black};
    }
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  align-self: center;

  li {
    padding: 10px;
    color: ${p => p.theme.colors.gray};
    cursor: pointer;
  }
`

const Footer = () => (
  <StyledFooter className="line">
    <List>
      <li><Link prefetch href="/about"><span>Sobre</span></Link></li>
      <li><a href="https://github.com/mvfsillva/dialetus/releases/latest"><span>Releases</span></a></li>
      <li><a href="https://github.com/mvfsillva/dialetus"><span>Github</span></a></li>
      <li><a href="https://github.com/mvfsillva/dialetus-service"><span>Dialetus API</span></a></li>
    </List>
    <span>created by @mvfsillva</span>
  </StyledFooter>
)

export default Footer
