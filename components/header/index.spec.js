import React from 'react'
import { shallowWithTheme, mountWithTheme } from 'config/test/enzyme.theme'
import theme from 'theme'
import Header from '.'

import 'jest-styled-components'

const shallow = shallowWithTheme(theme)
const mount = mountWithTheme(theme)

const router = {
  pathname: '/'
}

const wrap = (props = {}) => shallow(<Header headline="headline" {...props} />).dive()

describe('[Component: Header]', () => {
  it('mounts component', () => {
    mount(<Header headline="headline" router={ router } />)
    mount(<Header headline="headline" dialect="dialect" router={ router } />)
  })
  it('renders headline when passed in', () => {
    const wrapper = wrap({ headline: 'test', router })
    expect(wrapper.contains('test')).toBe(true)
  })
  it('renders dialect when passed in', () => {
    const wrapper = wrap({ dialect: 'test', router })
    expect(wrapper.contains('test')).toBe(true)
  })

})
