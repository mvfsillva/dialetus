import { renderWithTheme } from 'helpers/testing-library'

import Regions from '.'
import { mock } from './mock'

describe('<Regions />', () => {
  test('should render a Regions', () => {
    const { getByTestId } = renderWithTheme(<Regions {...mock} />)
    expect(getByTestId(/regions/)).toBeInTheDocument()
  })
})
