import React from 'react'
import {Box} from '@rebass/grid'
import SSRRenderer from './ssr-renderer';

const WidthContainerMobile = (props) => <Box width="1" my={0} mx="auto"/>
const WidthContainerDesktop = (props) => <Box width="3/4" my={0} mx="auto"/>

const WidthContainer = (props) => (
    <SSRRenderer
        mobileComponent={< WidthContainerMobile />}
        desktopComponent={< WidthContainerDesktop />}/>
)

export default WidthContainer