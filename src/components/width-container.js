import styled from 'styled-components'
import {Flex} from '@rebass/grid'
import {colors} from '../design-system/theme';
import {isMobile} from 'react-device-detect';

const WidthContainer = styled.div `
    width: ${isMobile
    ? '100%'
    : '80%'};
    margin: 0 auto;
`

export default WidthContainer