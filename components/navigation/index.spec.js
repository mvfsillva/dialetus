import React from 'react'
import { shallow } from 'enzyme'
import { mountWithTheme } from '../../config/styled-enzyme'
import Navigation from '.'

const wrap = (props = {}) => shallow(<Navigation {...props} />)

describe('[Component: Navigation]', () => {
  it('should mount <Navigation /> component', () => {
    mountWithTheme(<Navigation />)
  })
})
