import React from 'react'
import { mountWithTheme } from '../../config/styled-enzyme'

import Search from '.'

describe('[Component: Search]', () => {
  it('should mount <Search /> component', () => {
    mountWithTheme(<Search />)
  })
})
