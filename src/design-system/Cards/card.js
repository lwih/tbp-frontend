import React from 'react';
import styled from 'styled-components'
import _get from 'lodash/get'
import _first from 'lodash/first'
import {Flex, Box} from '@rebass/grid'
import {spaces, colors, radii} from '../theme';

const Card = styled.div `
    background: ${colors.white};
    border-radius: ${radii['8']}px;
    border: 1px solid ${ '#d7466924'};
    padding: ${spaces['16']}px;
    width: 100%;
    max-width: 100%;

    &:hover {
        box-shadow: 0px 0px 1px 0px ${colors.sortOfPink};
    }
`

export default Card;
