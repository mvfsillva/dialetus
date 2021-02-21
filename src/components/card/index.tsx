import { ReactNode } from 'react'

import * as S from './styles'

type Props = {
  title: string
  examples: string[]
  meanings: string[]
  footer?: ReactNode
  dark?: boolean
}

function Card(props: Props) {
  const { title, examples, meanings, footer, dark } = props

  return (
    <S.Wrapper dark={dark} data-testid="card">
      <S.Title>{title}</S.Title>
      <S.Content>
        <div>
          <S.Label>Exemplos:</S.Label>
          {examples.map((example) => (
            <S.Span key={example}>{example}</S.Span>
          ))}
        </div>
        <div>
          <S.Label>Significados:</S.Label>
          {meanings.map((meaning) => (
            <S.Span key={meaning}>{meaning}</S.Span>
          ))}
        </div>
      </S.Content>
      <S.Footer>{footer}</S.Footer>
    </S.Wrapper>
  )
}

export default Card
