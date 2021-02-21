import styled, { css } from 'styled-components'

export const TurnIcon = styled.div<{ turn: boolean }>`
  ${({ theme, turn }) => css`
    background-color: transparent;
    margin-top: auto;
    margin-bottom: auto;
    transform: ${turn && 'rotate(-180deg)'};
    transform-origin: 50% 50%;
    transition: ${theme.transition.ease};
    svg {
      color: ${theme.colors.gray};
    }
  `}
`
