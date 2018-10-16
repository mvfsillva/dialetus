import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Arrow from '../arrow'

const HiperLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const BackHome = () => (
  <Link href='/'>
    <HiperLink>
      <Arrow right />
    </HiperLink>
  </Link>
)

export default BackHome
