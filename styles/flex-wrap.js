import styled from 'styled-components'

const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.large};
`

export default FlexWrap
