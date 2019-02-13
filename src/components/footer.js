import React from 'react'
import styled from 'styled-components'
import {Box, Flex} from '@rebass/grid';
import InternalLink from '../design-system/Links/internal-link';
import {colors} from '../design-system/theme';
import FooterList from './footer-list';
import ExternalLink from '../design-system/Links/external-link';

const FooterLogo = styled.img `
max-width: 300px;
`

const FooterComponent = (props) => (
    <Flex
        p={4}
        className={props.className}
        flexDirection="column"
        justifyContent="center">
        <Box alignSelf="center">
            <InternalLink to="/">
                <FooterLogo
                    className="Header-Logo"
                    src="https://d33wubrfki0l68.cloudfront.net/77b847097eaca9fc5eb348ab810903d0ef4f38f1/a6826/images/logo.svg"
                    alt="the better play"/>
            </InternalLink>
        </Box>
        <Box alignSelf="center">
            Inspiration fur gutes spielzeug
        </Box>
        <Box alignSelf="flex-end" mt={3}>
            <InternalLink color={colors.lightBlue} to={'/contact'}>Kontakt</InternalLink>
        </Box>
        <Box alignSelf="flex-end">
            <FooterList data={props.data}/>
        </Box>
        <Box alignSelf="flex-end">
            Copyright © {new Date().getFullYear()}
        </Box>
        <Box alignSelf="flex-end">
            <ExternalLink
                href="https://www.facebook.com/THE-BETTER-PLAY-311913689294308/"
                target="_blank">
                <img
                    src="https://d33wubrfki0l68.cloudfront.net/5fda456dd840cf150471834ff9f39e7c2a8c0fcd/b4de1/images/icon-f.svg"
                    alt="Facebook"
                    width="20px"/>
            </ExternalLink>
        </Box>
    </Flex>
)

const Footer = styled(FooterComponent)`
    background: ${colors.teal};
    color: ${colors.halfGrey};
    font-size: 14px;
    box-shadow: 0px 0px 2px 2px ${colors.darkGrey};
`

export default Footer