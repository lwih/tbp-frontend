import React from 'react'
import styled from 'styled-components'
import {Box, Flex} from '@rebass/grid';
import InternalLink from '../design-system/Links/InternalLink';
import {colors} from '../design-system/theme';

const FooterComponent = (props) => (
    <Flex
        className={props.className}
        flexDirection="column"
        justifyContent="center">
        <Box>
            <InternalLink to="/">
                <img
                    className="Header-Logo"
                    src="https://d33wubrfki0l68.cloudfront.net/77b847097eaca9fc5eb348ab810903d0ef4f38f1/a6826/images/logo.svg"
                    alt="the better play"/>
            </InternalLink>
        </Box>
        <Box>
            Inspiration fur gutes spielzeug
        </Box>
        <Box>
            facebook
        </Box>
        <Box>
            copyrights
        </Box>
        <Box>
            links
        </Box>
    </Flex>
)

const Footer = styled(FooterComponent)`
    background: ${colors.teal};
`

export default Footer