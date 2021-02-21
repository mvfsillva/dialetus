import { mock } from './mock'
import Expressions from '.'

export default {
  title: 'Components/Expressions',
  component: Expressions
}

export function Default() {
  return <Expressions {...mock} />
}
