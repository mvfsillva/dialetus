'use strinct'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

require('jest-styled-components')()

configure({ adapter: new Adapter() })
