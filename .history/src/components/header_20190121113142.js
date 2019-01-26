import {Link} from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import {Flex, Box} from '@rebass/grid'

const HeaderComponent = ({siteTitle, className}) => (
    <Flex className={className} justifyContent="center">

        <Flex>
            <Box width={[
                1, 1, 3 / 4
            ]}>{siteTitle}
            </Box>
            <Box>
                <img
                    class="Header-Logo"
                    src="https://d33wubrfki0l68.cloudfront.net/77b847097eaca9fc5eb348ab810903d0ef4f38f1/a6826/images/logo.svg"
                    alt=""/></Box>
        </Flex>
    </Flex>
)HeaderComponent.propTypes = {
    siteTitle: PropTypes.string,
    className: PropTypes.string
}

HeaderComponent.defaultProps = {
    siteTitle: ``
}