import { getStateDescription } from 'helpers/dictionary'

import * as S from './styles'

type Props = {
  data: Array<{ name: string; total: number }>
  region: string
  onClick: (arg: string) => void
}

function Regions(props: Props) {
  const { data, onClick, region } = props

  return (
    <S.Wrapper data-testid="regions">
      {data?.map(({ name }) => (
        <S.Link
          key={name}
          onClick={() => onClick(name)}
          active={region === name}
        >
          {getStateDescription(name)}
        </S.Link>
      ))}
    </S.Wrapper>
  )
}

export default Regions
