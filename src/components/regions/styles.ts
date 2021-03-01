import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const Link = styled.a<{ active?: boolean }>`
  ${({ theme, active }) => css`
    color: ${active ? theme.colors.black : theme.colors.darkGreen};
    text-decoration: ${active && 'underline'};
    margin: 0.8rem;
    font-size: ${theme.font.sizes.medium};
    text-transform: capitalize;
    transition: ${theme.transition.ease};
    &:hover {
      color: ${theme.colors.lightPurple};
      cursor: pointer;
    }
  `}
`
