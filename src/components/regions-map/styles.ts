import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  height: 50rem;
  width: 50rem;
  justify-content: center;

  ${media.lessThan('medium')`
    width: 30rem;
    height: 30rem;
  `}
`
