import React from 'react'
import { shallow } from 'enzyme'
import { mountWithTheme } from '../../config/styled-enzyme'
import Loading from '.'

const wrap = (props = {}) => shallow(<Loading {...props} />)

describe('[Component: Loading]', () => {
  it('should mount <Loading /> component', () => {
    mountWithTheme(<Loading />)
  })
})
