import React from 'react'
import { shallowWithTheme, mountWithTheme } from 'config/test/enzyme.theme'
import theme from 'theme'
import Card from '.'

require('jest-styled-components')()

const shallow = shallowWithTheme(theme)
const mount = mountWithTheme(theme)

describe('[Component: Card]', () => {
  it('mounts component', () => {
    mount(<Card />)
  })
})
