import { renderWithTheme } from '../../helpers/testing-library'

import RegionsMap from '.'
import { mock } from './mock'

describe('<RegionsMap />', () => {
  test('should render a RegionsMap', () => {
    const { getByTestId } = renderWithTheme(<RegionsMap {...mock} />)
    expect(getByTestId(/regions-map/)).toBeInTheDocument()
  })
})
