import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    text-align: center;
    box-sizing: border-box;
    box-shadow: ${theme.shadow.small};
    padding: ${theme.spaces.small};
    display: flex;
    align-item: center;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      text-align: left;
      margin: auto;
    `}
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
