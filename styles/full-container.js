import styled from 'styled-components'

const FullContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({theme}) => theme.palette.gray['100']};
`

export default FullContainer
