import { renderWithTheme } from 'helpers/testing-library'

import Tooltip from '.'
import { mock } from './mock'

describe('<RegionsMap />', () => {
  test('should render a RegionsMap', () => {
    const { getByTestId } = renderWithTheme(
      <Tooltip formattedValue={'string | number'} {...mock} />
    )
    expect(getByTestId(/tooltip/)).toBeInTheDocument()
  })
})
