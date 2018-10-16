import React from 'react'
import { mountWithTheme } from 'config/test/enzyme.theme'
import theme from 'theme'
import Arrow from '.'

import 'jest-styled-components'

const mount = mountWithTheme(theme)

describe('[Component: Arrow]', () => {
  it('mounts component', () => {
    mount(<Arrow  right/>)
    mount(<Arrow  left/>)
  })
})
