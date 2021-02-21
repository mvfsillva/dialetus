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

    ${media.greaterThan('large')`
      grid-template-columns: 1fr 1fr 1fr;
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
`
