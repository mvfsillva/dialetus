import React from 'react'
import { mountWithTheme } from '../../config/styled-enzyme'
import Navigation from '.'

describe('[Component: Navigation]', () => {
  it('should mount <Navigation /> component', () => {
    mountWithTheme(<Navigation />)
  })
})
