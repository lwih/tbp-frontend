import styled from 'styled-components'
import {colors, radii} from '../theme'
import Button from './button'

const PrimaryButton = styled(Button)`
    background-color: ${colors.sortOfPink};
    border-radius: ${radii['100']}px;
    border: 2px solid ${colors.sortOfPink};
    color: ${colors.white};
    text-decoration: none;
`

PrimaryButton.displayName = 'PrimaryButton'

export default PrimaryButton