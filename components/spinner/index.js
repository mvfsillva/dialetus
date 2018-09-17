import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Circle = styled.div`
  margin: 50px;
  height: 28px;
  width: 28px;
  animation: ${rotate} 1s infinite linear;
  border: 8px solid ${props => props.theme.colors.black.dark};
  border-right-color: transparent;
  border-radius: 50%;
`

const Spinner = () => <Circle />

export default Spinner
