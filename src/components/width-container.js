import styled from 'styled-components'
import {Flex} from '@rebass/grid'
import {colors} from '../design-system/theme';
import {isDesktop} from 'react-device-detect';

const WidthContainer = styled.div `
    width: ${isDesktop
    ? '80%'
    : '100%'};
    margin: 0 auto;
`

export default WidthContainer