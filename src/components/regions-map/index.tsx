import React, { useState, useEffect, useContext, useRef } from 'react'

import { ResponsiveChoropleth } from '@nivo/geo'
import { getStateByDescription, getStateDescription } from 'helpers/dictionary'
import { ThemeContext } from 'styled-components'
import BrasilGeoJSON from '../../helpers/brasil_estados.json'

import * as S from './styles'
import Tooltip from 'components/tooltip'

interface Props {
  data: Array<{ name: string; total: number }>
  region: string
  onClick: (string) => void
}

function RegionsMap(props: Props) {
  const { data, region, onClick } = props
  const targetRef = useRef<HTMLDivElement>()

  const [currentData, setCurrentData] = useState([])
  const { colors } = useContext(ThemeContext)

  const prepareData = (
    data: { name: string; total: number }[],
    region: string
  ): Array<{ id: string; value: number }> => {
    return data.map((stateData) => ({
      id: getStateDescription(stateData.name),
      value: stateData.name === region ? 1 : 0,
      expressions: stateData.total
    }))
  }

  const setScale = (wrapperWidth: number): number => {
    return wrapperWidth < 500 ? 400 : 700
  }

  const setTranslation = (wrapperWidth: number): [number, number] => {
    return wrapperWidth < 500 ? [1.8, 0.15] : [1.83, 0.15]
  }

  useEffect(() => {
    setCurrentData(prepareData(data, region))
  }, [data, region])

  return (
    <S.Wrapper ref={targetRef} data-testid="regions-map">
      <ResponsiveChoropleth
        data={currentData}
        features={BrasilGeoJSON}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={[colors.lightGreen, colors.darkGreen]}
        domain={[0, 1]}
        unknownColor={colors.lightGray}
        projectionScale={setScale(targetRef.current?.offsetWidth)}
        projectionTranslation={setTranslation(targetRef.current?.offsetWidth)}
        enableGraticule={false}
        borderWidth={1.5}
        borderColor="#fff"
        onClick={({ label }) => onClick(getStateByDescription(label))}
        tooltip={({ feature }) => Tooltip(feature)}
        legends={[]}
      />
    </S.Wrapper>
  )
}

export default RegionsMap
