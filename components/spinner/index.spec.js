import React from 'react'
import { mountWithTheme } from 'config/test/enzyme.theme'

import theme from 'theme'
import Spinner from '.'

import 'jest-styled-components'

const mount = mountWithTheme(theme)

describe('[Component: Spinner]', () => {
  it('mounts component', () => {
    mount(<Spinner />)
  })
})
