import React from 'react'
import { mountWithTheme } from 'config/test/enzyme.theme'
import theme from 'theme'
import BackHome from '.'

import 'jest-styled-components'

const mount = mountWithTheme(theme)

describe('[Component: BackHome]', () => {
  it('mounts component', () => {
    mount(<BackHome />)
  })
})
