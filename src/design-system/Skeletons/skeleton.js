import React from 'react'
import styled from 'styled-components'
import {colors} from '../theme';

const SkeletonComponent = (props) => <div {...props}/>

const Skeleton = styled(SkeletonComponent)`
    position: relative;
    z-index: ${props => props.color === 'transparent'
  ? '-1'
  : 'auto'};
    background: ${props => props.color};
    width: ${props => props.width};
    height: ${props => props.height};
    animation: ${props => props.withAnimation
    ? 'react-placeholder-pulse 1.2s infinite'
    : 'none'};

    @keyframes react-placeholder-pulse {
        0% {
          opacity: .6;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: .6;
        }
      }
`

Skeleton.defaultProps = {
  color: colors.paleGrey,
  width: '100%',
  withAnimation: true
}

export default Skeleton