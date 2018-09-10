import React from 'react'
import { shallow } from 'enzyme'
import If from '.'

describe('[Common: If]', () => {
  it('Renders children', () => {
    const condition = true
    const component = shallow(
      <If test={condition}>
        <div className="rendered">RENDERED</div>
      </If>,
    )
    expect(component.find('.rendered')).toHaveLength(1)
  })
  it('does not render children', () => {
    const condition = false
    const component = shallow(
      <If test={condition}>
        <div className="rendered">NOT RENDERED</div>
      </If>,
    )
    expect(component.find('.rendered')).toHaveLength(0)
  })
})
