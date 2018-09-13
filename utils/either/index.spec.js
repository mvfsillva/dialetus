
import React from 'react'
import { shallow } from 'enzyme'
import Either from '.'

describe('[Utils: Either]', () => {
  it('renders right component', () => {
    const condition = true
    const either = shallow(
      <Either
        when={condition}
        right={<span className="correct">CORRECT</span>}
        left={<span className="failed">FAILED</span>}
      />,
    )
    expect(either.find('.correct')).toHaveLength(1)
    expect(either.find('.failed')).toHaveLength(0)
  })

  it('renders left component', () => {
    const condition = false
    const either = shallow(
      <Either
        when={condition}
        right={<span className="correct">CORRECT</span>}
        left={<span className="failed">FAILED</span>}
      />,
    )
    expect(either.find('.correct')).toHaveLength(0)
    expect(either.find('.failed')).toHaveLength(1)
  })
})
