import React from 'react'
import { mountWithTheme } from '../../config/styled-enzyme'

import PageTitle from '.'

describe('[Component: PageTitle]', () => {
  it('should mount <PageTitle /> component', () => {
    mountWithTheme(<PageTitle />)
  })
})
