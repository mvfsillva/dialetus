import React from 'react'
import { mountWithTheme } from 'config/test/enzyme.theme'
import theme from 'theme'
import 'jest-styled-components'
import CardList from '.'

const mount = mountWithTheme(theme)

describe('[Container: CardList]', () => {
  it('mounts component', () => {
    mount(<CardList />)
  })
})
