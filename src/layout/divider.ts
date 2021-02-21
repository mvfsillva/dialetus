import styled, { css } from 'styled-components'

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 0.5px solid ${theme.colors.muted};
  `}
`
