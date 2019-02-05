import React from 'react'
import styled from 'styled-components'
import {colors} from '../theme';

const SkeletonComponent = (props) => <div {...props}/>

const Skeleton = styled(SkeletonComponent)`
    background: ${colors.paleGrey};
    width: ${props => props.width};
    height: ${props => props.height};
    animation: react-placeholder-pulse 1.2s infinite;

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

export default Skeleton