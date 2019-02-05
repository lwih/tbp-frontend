import styled from 'styled-components'
import {colors, radii} from '../theme'

const TernaryButton = styled.button `
    background-color: ${colors.paleGrey};
    border-radius: ${radii['4']}px;
    border: 1px solid ${colors.darkGrey};
    height: 32px;
    width: 100%;
    outline: 0;
    text-align: center;
    color: ${colors.darkGrey};
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    &:hover {
        transition: all .5s;
    }
`

export default TernaryButton