import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const pulse = keyframes`
  0% { transform: scale( .75 ) }
  40% { transform: scale( .75 ) }
  60% { transform: scale( 1 ) }
  80% { transform: scale( .75 ) }
  100% { transform: scale( .75 ) }
`

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray};
    text-align: center;
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.sizes.large};
    position: relative;
    z-index: 2;
    margin-top: ${theme.spaces.medium};
    transition: ${theme.transition.ease};
    padding-bottom: ${theme.spaces.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      margin-top: ${theme.spaces.xxlarge};
      padding-bottom: ${theme.spaces.xsmall};
    `}

    a {
      color: ${theme.colors.darkGreen};
      font-weight: bold;
      text-decoration: none;
      :hover {
        color: ${theme.colors.lightPurple};
      }
    }
  `}
`

export const Love = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    position: relative;
    top: 0.2rem;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.darkGray};
    transform: scale(0.9);
    animation: ${pulse} 0.5s linear infinite alternate-reverse;
  `}
`
