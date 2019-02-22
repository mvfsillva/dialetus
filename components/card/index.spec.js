import React from 'react'
import { shallow } from 'enzyme'
import { mountWithTheme } from '../../config/styled-enzyme'
import Card from '.'

const wrap = (props = {}) => shallow(<Card {...props} />)

describe('[Component: Card]', () => {
  it('should mount <Card /> component', () => {
    mountWithTheme(<Card />)
  })

  it('should render dialects data', () => {
    const wrapper = wrap({ data: [] })
    expect(wrapper.exists()).toBeTruthy()
  })
})
