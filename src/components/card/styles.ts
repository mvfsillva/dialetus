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
export const Region = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGreen};
    margin-bottom: ${theme.spaces.tiny};
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spaces.xsmall} 0;

    > div {
      margin: ${theme.spaces.tiny} 0;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    padding-right: ${theme.spaces.tiny};
    font-size: ${theme.font.sizes.small};
    font-weight: 700;
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spaces.tiny};
    font-size: ${theme.font.sizes.tiny};
    font-weight: 400;
  `}
`

export const Footer = styled.footer`
  position: sticky;
`
