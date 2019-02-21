import React from 'react'
import { shallowWithTheme,  mountWithTheme } from '../../config/styled-enzyme'

import Page from '.'

const shallow = shallowWithTheme
const mount = mountWithTheme

const wrap = (props = {}) => shallow(<Page {...props} />)

describe('[Layout: Page]', () => {

  it('should mount <Page /> component', () => {
    mount(<Page>Brazilian Dialects</Page>)
  })

  it('should verify if the props exists', () => {
    const wrapper = wrap({ children: <p>Crazy</p>})
    expect(wrapper.props().children).toBeTruthy()
  })
})

