import React from 'react'
import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'

// every test uses the base theme, if no custom theme is provided
import defaulTheme from '../theme/default'

export const shallowWithTheme = (children, customTheme) => {
  const theme = customTheme || defaulTheme
  return shallow(children, { context: theme })
}

export const mountWithTheme = (Component, customTheme) => {
  const theme = customTheme || defaulTheme
  return mount(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}
