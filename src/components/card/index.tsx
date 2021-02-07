// Packages
import React from 'react'

// Styles
import * as S from './styles'

interface Props {
  children: React.ReactNode
  dark?: boolean
}

function Card(props: Props) {
  const { children, dark } = props

  return (
    <S.Wrapper dark={dark} data-testid="card">
      {children}
    </S.Wrapper>
  )
}

export default Card
