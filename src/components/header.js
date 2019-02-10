import {Link} from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import {Flex, Box} from '@rebass/grid'
import InternalLink from '../design-system/Links/internal-link';
import {colors} from '../design-system/theme';
import Skeleton from '../design-system/Skeletons/skeleton';

export const HeaderTitle = ({title}) => (
    <Flex justifyContent="center">
        <h1 style={{
            color: colors.white
        }}>{title}</h1>
    </Flex>
)

const HeaderComponent = ({title, className, children}) => (
    <Box className={className} justifyContent="center">
        <Flex width={1} className="Header-Background" justifyContent="center">
            <Box className="Header" width={1}>
                <Flex flexDirection="column" justifyContent="center">
                    <Box
                        alignSelf="center"
                        className="Header-Logo-Container"
                        style={{
                        minHeight: '45px'
                    }}>
                        <InternalLink to="/">
                            <img
                                className="Header-Logo"
                                src="https://d33wubrfki0l68.cloudfront.net/77b847097eaca9fc5eb348ab810903d0ef4f38f1/a6826/images/logo.svg"
                                alt={title}/>
                        </InternalLink>
                    </Box>
                    <Box alignSelf="center" className="Header-title">
                        {title}
                    </Box>
                </Flex>
                <Flex>
                    <Box className="Header" width={1} mt={3}>
                        {!!children
                            ? (
                                <React.Fragment>{children}</React.Fragment>
                            )
                            : (<Skeleton height="32px" color="transparent"/>)
}
                    </Box>
                </Flex>
            </Box>
        </Flex>
    </Box>
)

HeaderComponent.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any
}

HeaderComponent.defaultProps = {
    title: 'Inspiration für gutes Spielzeug'
}

const Header = styled(HeaderComponent)`
        background-image: linear-gradient(to top, #ff4572, #2a079b);
        position: relative;
        padding: 10px;

        .Header-Background::after {
            background: url("https://d33wubrfki0l68.cloudfront.net/592a39a61bc0f12077ac2d2801584b34444184f2/c035a/images/pattern-confetti.png");
            background-repeat: repeat;
            content: "";
            opacity: 0.4;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: 0;
        }

        .Header {
            z-index: 1;
            position: relative;
        }

        .Header-Logo-Container {
            width: 200px;
        }

        .Header-Logo {
            margin-bottom: 0;
        }

        .Header-title {
            color: ${colors.white};
            font-size: 14px;
        }
    
`

export default Header
