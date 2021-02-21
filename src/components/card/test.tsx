import { screen } from '@testing-library/react'
import { renderWithTheme } from 'helpers/testing-library'
import { mock } from './mock'
import Card from '.'

describe('<Card />', () => {
  test('should render a card', () => {
    const { getByTestId } = renderWithTheme(<Card {...mock} />)
    expect(getByTestId(/card/)).toBeInTheDocument()
    expect(screen.getByText(/Barril Dobrado/)).toBeInTheDocument()
    expect(
      screen.getByText(/Nossa vei que barril dobrado!/)
    ).toBeInTheDocument()
  })
})
