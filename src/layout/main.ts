import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Box } from 'layout'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spaces.small};
    column-gap: ${theme.spaces.small};
    row-gap: ${theme.spaces.tiny};
    font-size: ${theme.spaces.xsmall};
    text-align: left;
    margin: auto;

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const RegionTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    margin-bottom: ${theme.spaces.medium};
    text-transform: capitalize;
    color: ${theme.colors.green};
  `}
`

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spaces.medium} 0;
  `}
`

export const CardFooter = styled.footer`
  position: sticky;
`

export const LoadingWrapper = styled(Box)`
  min-height: 30vh;
  height: 100%;
  width: 100%;
`
export const ExpressionsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;

  ${media.greaterThan('medium')`
  height: 76vh;
  overflow: auto;
`}
`
export const MapContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 76vh;
  justify-content: space-between;
  margin-top: 4rem;
  width: 100%;

  ${media.lessThan('medium')`
  flex-direction: column;
  height: auto;
`}
`
