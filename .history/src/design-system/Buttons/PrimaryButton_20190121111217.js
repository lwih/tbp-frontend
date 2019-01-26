import styled from 'styled-components'
import {colors, radii} from '../theme'

const PrimaryButton = styled.button `
    background-color: ${colors.primaryCTA};
    border-radius: ${radii[3]}px;
    height: 32px;
    outline: 0;
    margin: 10px 5px;
    text-align: center;
    color: ${colors.white};
    text-decoration: none;
    padding-top: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;

    &:hover {
        transition: all .5s;
    }
`

export default PrimaryButton