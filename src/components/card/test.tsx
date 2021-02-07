// Packages
import React from 'react'

// Helpers
import { renderWithTheme } from 'helpers/testing-library'

// Styles
import theme from 'styles/theme'

// Components
import Card from '.'

describe('<Card />', () => {
  test('should render a card', () => {
    const { getByTestId } = renderWithTheme(<Card>Budbud Card</Card>)
    expect(getByTestId(/card/)).toBeInTheDocument()
  })

  test('should render the button colors correctly', () => {
    const { container } = renderWithTheme(<Card dark>Busbud dark card</Card>)

    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.black
    })
  })
})
