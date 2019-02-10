import styled from 'styled-components'
import {colors, radii} from '../theme'
import Button from './button';

const TernaryButton = styled(Button)`
    background-color: transparent;
    border-radius: ${radii['4']}px;
    border: none;
    color: ${colors.white};
`
// const TernaryButton = styled(Button)`     background-color:
// ${colors.paleGrey};     border-radius: ${radii['4']}px;     border: 1px solid
// ${colors.darkGrey};     color: ${colors.darkGrey}; `

TernaryButton.displayName = 'TernaryButton'

export default TernaryButton