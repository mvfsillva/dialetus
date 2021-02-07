import styled, { css } from 'styled-components'

type ClusterProps = {
  noWrap?: boolean
  align?: string
  justify?: string
  space?: string
  showOverflow?: boolean
}

export const Cluster = styled.div<ClusterProps>`
  ${({ showOverflow, noWrap, align, space, justify }) => css`
    overflow: ${showOverflow && 'hidden'};

    & > * {
      display: flex;
      flex-wrap: ${noWrap && 'wrap'};
      justify-content: ${justify};
      align-items: ${align};
      margin: calc(${space} / 2 * -1);
    }

    & > * > * {
      margin: calc(${space} / 2);
    }
  `}
`
