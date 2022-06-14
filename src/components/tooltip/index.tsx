import { ChoroplethBoundFeature } from '@nivo/geo'

import * as S from './styles'

interface ToolTip extends ChoroplethBoundFeature {
  id: string
}

function Tooltip(feature: ChoroplethBoundFeature) {
  const { id, data } = feature as ToolTip

  return (
    <S.Wrapper data-testid="tooltip">
      <S.Title>{id}</S.Title>
      <S.Text>expressões disponíveis: {data?.expressions || 0} </S.Text>
    </S.Wrapper>
  )
}

export default Tooltip
