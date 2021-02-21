import { FiCalendar } from 'react-icons/fi'

import Input from '.'

export default {
  title: 'Components/Input',
  component: Input
}

export function Default() {
  return <Input />
}

export function WithIcon() {
  return <Input icon={<FiCalendar />} />
}
