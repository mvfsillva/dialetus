import { ReactNode } from 'react'

import { getStateDescription } from 'helpers/dictionary'
import * as S from './styles'

type Props = {
  title: string
  region?: string
  examples: string[]
  meanings?: string[]
  footer?: ReactNode
  dark?: boolean
}

function Card(props: Props) {
  const { title, region, examples, meanings, footer, dark } = props

  return (
    <S.Wrapper dark={dark} data-testid="card">
      {region && <S.Region>Região: {getStateDescription(region)}</S.Region>}
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
          {meanings?.map((meaning) => (
            <S.Span key={meaning}>{meaning}</S.Span>
          ))}
        </div>
      </S.Content>
      <S.Footer>{footer}</S.Footer>
    </S.Wrapper>
  )
}

export default Card
