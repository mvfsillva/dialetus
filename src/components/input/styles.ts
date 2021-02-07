// Packages
import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  > input {
    padding-left: 4.2rem;
  }
`

export const Icon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    padding: 18px;
    pointer-events: none;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
  `}
`

export const Field = styled.input<{ disabled?: boolean; icon?: ReactElement }>`
  ${({ theme, disabled }) => css`
    width: 100%;
    min-height: 36px;
    background-color: ${disabled && theme.colors.muted};
    border-radius: ${theme.border.radius};
    border-width: 0px;
    bottom: 0px;
    box-shadow: 0 0 0 1px ${rgba(theme.colors.muted, 1)};
    display: block;
    font-size: ${theme.font.sizes.small};
    outline: 0;
    color: ${theme.colors.gray};
    padding: 1.7rem;

    ::placeholder {
      color: ${theme.colors.darkGray};
    }

    :hover {
      box-shadow: 0 0 0 2px ${rgba(theme.colors.gray, 0.3)};
    }

    :focus,
    :active {
      box-shadow: 0 0 0 2px ${rgba(theme.colors.gray, 0.3)};
    }
  `}
`
