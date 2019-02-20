import React from 'react'
import Header from '.'

const shallow = global.StyledComponents.shallowWithTheme
const mount = global.StyledComponents.mountWithTheme

const wrap = (props = {}) => shallow(<Header {...props} />)

describe('[Component: Header]', () => {
  it('should mount <Header /> component', () => {
    mount(<Header />)
    mount(<Header headline="Brazilian Dialects" />)
  })

  it('should verify if the props exists', () => {
    const wrapper = wrap({ headline: 'Dialetus' })
    expect(wrapper.props().children).toBeTruthy()
  })

  it('should register called one time change', () => {
    const wrapper = wrap({ headline: 'Dialetus' })
    expect(wrapper.contains('Dialetus')).toBe(true)
  })
})
