import React from 'react'
import Header from '.'

const shallow = global.StyledComponents.shallowWithTheme
const mount = global.StyledComponents.mountWithTheme

const wrap = (props = {}) => shallow(<Header {...props} />)

describe('[Component: Header]', () => {
  it('should mount <Header /> component', () => {
    mount(<Header />)
  })
})
