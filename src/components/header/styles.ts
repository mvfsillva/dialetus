import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    text-align: center;
    padding: ${theme.spaces.small};
    color: ${theme.colors.green};
    height: 40vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: ${theme.font.sizes.huge};
    }
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.6rem auto 0;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 15rem auto;
  `}
`

export const ContentSelect = styled.div`
  width: 22rem;
`
