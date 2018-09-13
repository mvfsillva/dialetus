import React from 'react'
import { mountWithTheme } from 'config/test/enzyme.theme'
import theme from 'theme'
import Card from '.'

import 'jest-styled-components'

const mount = mountWithTheme(theme)

describe('[Component: Card]', () => {
  it('mounts component', () => {
    mount(<Card />)
  })
})
