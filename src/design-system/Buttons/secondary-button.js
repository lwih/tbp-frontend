import styled from 'styled-components'
import { colors, radii } from '../theme'
import Button from './button'

const SecondaryButton = styled(Button)`
  background-color: ${colors.lightBlue};
  border-radius: ${radii['100']}px;
  border: 2px solid ${colors.lightBlue};
  height: 48px;
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
    transition: all 0.216s;
    background-color: ${colors.greenBlue};
    border: 2px solid ${colors.greenBlue};
    cursor: pointer;
  }
`

SecondaryButton.displayName = 'SecondaryButton'

export default SecondaryButton
