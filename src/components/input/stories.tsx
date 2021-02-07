// Packages
import React from 'react'
import { FiCalendar } from 'react-icons/fi'

// Component
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
