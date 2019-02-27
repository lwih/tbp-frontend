import styled from 'styled-components'
import {colors, radii} from '../theme'
import Button from './button'

const PrimaryButton = styled(Button)`
    background-color: ${colors.sortOfPink};
    border-radius: ${radii['100']}px;
    border: 2px solid ${colors.sortOfPink};
    color: ${colors.white};
    text-decoration: none;

    &:hover {
        transition: all .216s;
        background-color: ${colors.sortOfPinkDarker};
        border: 2px solid ${colors.sortOfPinkDarker};
        cursor: pointer;
    }
`

PrimaryButton.displayName = 'PrimaryButton'

export default PrimaryButton