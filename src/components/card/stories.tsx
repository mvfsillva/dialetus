// Packages
import React from 'react'

// Component
import Card from '.'

export default {
  title: 'Components/Card',
  component: Card
}

export function Default() {
  return <Card>Busbud light Card</Card>
}

export function Dark() {
  return <Card dark>Busbud Dark Card</Card>
}
