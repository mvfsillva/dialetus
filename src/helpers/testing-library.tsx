// Packages
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

// Theme
import theme from 'styles/theme'

export const renderWithTheme = (children, params = {}) => {
  const component = render(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    params
  )

  return {
    ...component,
    rerender: (ui, options = {}) =>
      renderWithTheme(ui, { container: component.container, ...options })
  }
}
