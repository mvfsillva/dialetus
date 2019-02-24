import React from 'react'
import 'jest-styled-components'
import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import defaulTheme from '../theme/default'

export const shallowWithTheme = (children, customTheme) => {
  const theme = customTheme || defaulTheme
  return shallow(children, { context: theme })
}

export const mountWithTheme = (Component, customTheme) => {
  const theme = customTheme || defaulTheme
  return mount(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}
