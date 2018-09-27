import React from 'react'
import { mountWithTheme } from 'config/test/enzyme.theme'
import theme from 'theme'
import Brazil from '.'

import 'jest-styled-components'

const mount = mountWithTheme(theme)

describe('[Component: Brazil]', () => {
  it('mounts component', () => {
    mount(<Brazil />)
  })
})
