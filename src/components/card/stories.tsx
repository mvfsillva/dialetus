import { mock } from './mock'
import Card from '.'

export default {
  title: 'Components/Card',
  component: Card
}

export function Default() {
  return <Card {...mock} />
}
