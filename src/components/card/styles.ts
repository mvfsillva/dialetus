// Packages
import styled, { css } from 'styled-components'

type Props = {
  dark?: boolean
}

const modifiers = {
  dark: (theme) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.div<Props>`
  ${({ theme, dark }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spaces.medium};
    margin-bottom: ${theme.spaces.medium};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadow.medium};
    transition: ${theme.transition.ease};

    ${dark && modifiers.dark(theme)};
  `}
`
