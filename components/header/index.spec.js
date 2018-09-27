import React from 'react'
import { shallowWithTheme, mountWithTheme } from 'config/test/enzyme.theme'
import theme from 'theme'
import Header from '.'

import 'jest-styled-components'

const shallow = shallowWithTheme(theme)
const mount = mountWithTheme(theme)

const wrap = (props = {}) => shallow(<Header headline="headline" {...props} />).dive()

describe('[Component: Header]', () => {
  it('mounts component', () => {
    mount(<Header headline="headline" />)
    mount(<Header headline="headline" dialect="dialect" />)
  })
  it('renders headline when passed in', () => {
    const wrapper = wrap({ headline: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })
  it('renders dialect when passed in', () => {
    const wrapper = wrap({ dialect: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })
})
