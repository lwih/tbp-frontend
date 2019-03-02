import React from 'react'
import styled from 'styled-components'
import {colors, radii, spaces, fontSizes} from '../theme';

const Chip = styled.div `
    background: ${colors.white};
    border: 1px solid ${colors.lightBlue};
    color: ${colors.lightBlue};
    border-radius: ${radii['16']}px;
    padding: ${spaces['4']}px ${spaces['8']}px;
    font-size: ${fontSizes['16']}px;

    &:hover {
        cursor: pointer;
        background: ${colors.white};
        border: 1px solid ${colors.greenBlue};
        color: ${colors.greenBlue};
    }
`

export default Chip