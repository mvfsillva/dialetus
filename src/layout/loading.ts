// Packages
import styled, { keyframes } from 'styled-components'

const dotPulseBefore = keyframes`
  0% { box-shadow: 9984px 0 0 -5px #33AF49; }
  30% { box-shadow: 9984px 0 0 2px #33AF49; }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px #33AF49;
  }
`

const dotPulse = keyframes`
  0% { box-shadow: 9999px 0 0 -5px #33AF49; }
  30% { box-shadow: 9999px 0 0 2px #33AF49; }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px #33AF49;
  }
`

const dotPulseAfter = keyframes`
  0% { box-shadow: 10014px 0 0 -5px #33AF49; }
  30% { box-shadow: 10014px 0 0 2px #33AF49; }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px #33AF49;
  }
`

export const Loading = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #33af49;
  color: #33af49;
  box-shadow: 9999px 0 0 -5px #33af49;
  animation: ${dotPulse} 1.5s infinite linear;
  animation-delay: 0.25s;

  ::before,
  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #33af49;
    color: #33af49;
  }

  ::before {
    box-shadow: 9984px 0 0 -5px #33af49;
    animation: ${dotPulseBefore} 1.5s infinite linear;
    animation-delay: 0s;
  }

  ::after {
    box-shadow: 10014px 0 0 -5px #33af49;
    animation: ${dotPulseAfter} 1.5s infinite linear;
    animation-delay: 0.5s;
  }
`
