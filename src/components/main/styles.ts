import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spaces.medium};
    column-gap: ${theme.spaces.small};
    row-gap: ${theme.spaces.small};
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

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spaces.medium} 0;
    > p {
      font-size: ${theme.font.sizes.small};
      font-weight: 400;
    }
  `}
`
