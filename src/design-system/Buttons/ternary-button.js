import styled from 'styled-components'
import {colors, radii} from '../theme'
import Button from './button';

const TernaryButton = styled(Button)`
    background-color: transparent;
    border-radius: ${radii['4']}px;
    border: 1px solid ${colors.white};
    color: ${colors.white};
    min-width: 100px;

    &:hover {
        transition: all .216s;
        cursor: pointer;
    }
`

TernaryButton.displayName = 'TernaryButton'

export default TernaryButton