import styled from 'styled-components'
import {Flex} from '@rebass/grid'
import {colors} from '../design-system/theme';

const AppContainer = styled(Flex)`
    background-color: ${colors.paleGrey};
    justify-content: center;
    flex-direction: column;
`

export default AppContainer