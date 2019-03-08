import React from 'react'
import {Box} from '@rebass/grid'
import SSRRenderer from './ssr-renderer';

const WidthContainerMobile = ({children}) => <Box width={1} my={0} mx="auto" children={children}/>
const WidthContainerDesktop = ({children}) => <Box width={3 / 4} my={0} mx="auto" children={children}/>

const WidthContainer = ({children}) => (
    <SSRRenderer
        mobileComponent={(<WidthContainerMobile children={children}/>)}
        desktopComponent={(<WidthContainerDesktop children={children}/>)}/>
)

WidthContainer.displayName = 'WidthContainer'

export default WidthContainer