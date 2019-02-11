import React from 'react'
import styled from 'styled-components'
import {colors, radii, spaces, fontSizes} from '../theme';

const Chip = styled.div `
    background: ${colors.lightBlue};
    border: 1px solid ${colors.lightBlue};
    cursor: pointer;
    color: ${colors.white};
    border-radius: ${radii['16']}px;
    padding: ${spaces['4']}px ${spaces['8']}px;
    font-size: ${fontSizes['14']}px;
`

export default Chip