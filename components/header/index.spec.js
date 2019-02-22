import React from 'react'
import { shallowWithTheme,  mountWithTheme } from '../../config/styled-enzyme'

import Header from '.'

const shallow = shallowWithTheme
const mount = mountWithTheme

const wrap = (props = {}) => shallow(<Header {...props} />)

describe('[Component: Header]', () => {
  it('should mount <Header /> component', () => {
    mount(<Header />)
    mount(<Header headline="Brazilian Dialects" />)
  })

  it('should verify if the props exists', () => {
    const wrapper = wrap({ headline: 'Dialetus' })
    expect(wrapper.props()).toBeTruthy()
  })

  it('should render headline prop', () => {
    const wrapper = wrap({ headline: 'Dialetus' })
    expect(wrapper.contains('Dialetus')).toBe(true)
  })

  it('should verify that the props shows the same value passed', () => {
    const wrapper = wrap({ headline: 'Brazilian Dialects' })
    expect(wrapper.text()).toEqual('Brazilian Dialects')
  })
})
