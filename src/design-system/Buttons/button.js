import styled from 'styled-components'
import {colors, radii, sizes} from '../theme'
import {setButtonHeight} from '../design-system-helpers';

const Button = styled.button `
    height: ${props => setButtonHeight(props.size)}px;
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

Button.defaultProps = {
    size: sizes.medium
}

Button.displayName = 'Button'

export default Button