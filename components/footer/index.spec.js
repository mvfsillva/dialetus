import React from 'react'
import { shallowWithTheme,  mountWithTheme } from '../../config/styled-enzyme'

import Footer from '.'

const shallow = shallowWithTheme
const mount = mountWithTheme
const wrap = (props = {}) => shallow(<Footer {...props} />)

describe('[Component: Footer]', () => {
  it('should mount <Footer /> component', () => {
    mount(<Footer />)
    mount(<Footer info="I love open source" />)
  })

  it('should verify if the props exists', () => {
    const wrapper = wrap({ info: 'mvfsillva' })
    expect(wrapper.props()).toBeTruthy()
  })

  it('should verify that the info prop shows the same value passed', () => {
    const wrapper = wrap({ info: 'dialetus' })
    expect(wrapper.text()).toEqual('dialetus')
  })
})
