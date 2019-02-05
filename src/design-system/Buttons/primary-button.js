import styled from 'styled-components'
import {colors, radii} from '../theme'

const PrimaryButton = styled.button `
    background-color: ${colors.sortOfPink};
    border-radius: ${radii['100']}px;
    border: 2px solid ${colors.sortOfPink};
    height: 32px;
    width: 100%;
    outline: 0;
    text-align: center;
    color: ${colors.white};
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    &:hover {
        transition: all .5s;
    }
`

export default PrimaryButton