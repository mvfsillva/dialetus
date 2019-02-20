import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as StyledComponents from './enzyme.theme'

configure({ adapter: new Adapter() })

// allow any test to easily use the StyledComponents helpers
global.StyledComponents = StyledComponents
