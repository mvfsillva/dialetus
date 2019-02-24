import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import FlexWrap from '../../styles/flex-wrap'

const placeHolderShimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`

const Wrapper = styled.div`
  background-color: ${props => props.color};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: ${({ theme }) => theme.radius.micro};
  margin: ${({ theme }) => theme.spacing.medium};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: linear-gradient(
    to right,
    ${props => props.color} 8%,
    ${props => props.fade} 18%,
    ${props => props.color} 33%
  );

  background-size: 800px 104px;

  &.center {
    margin: auto;
  }
`

const Box = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.shadow.medium};
  color: ${({ theme }) => theme.palette.black};
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => theme.spacing.medium};
  width: 360px;
  margin: ${({ theme }) => theme.spacing.medium};
`

const Loading = ({ color, fade, width, height }) => (
  <FlexWrap>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n =>
      <Box key={n}>
        <Wrapper className="center" color={color} fade={({ theme }) => theme.palette.gray['300']} width={240} height={height} />
        <Wrapper color={color} fade={({ theme }) => theme.palette.gray['300']} width={220} height={height} />
        <Wrapper color={color} fade={fade} width={width} height={4} />
        <Wrapper color={color} fade={fade} width={width} height={4} />
        <Wrapper color={color} fade={fade} width={width} height={4} />

        <Wrapper color={color} fade={({ theme }) => theme.palette.gray['300']} width={220} height={height} />
        <Wrapper color={color} fade={fade} width={width} height={4} />
        <Wrapper color={color} fade={fade} width={width} height={4} />
        <Wrapper color={color} fade={fade} width={width} height={4} />
      </Box>
    )}
  </FlexWrap>
)

Loading.defaultProps = {
  color: ({ theme }) => theme.palette.gray['050'],
  fade: ({ theme }) => theme.palette.gray['100'],
  width: 160,
  height: 10
}

Loading.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.any,
  fade: PropTypes.any
}

export default Loading
