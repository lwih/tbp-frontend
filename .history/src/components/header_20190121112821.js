import {Link} from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import {Flex, Box} from '@rebass/grid'

const HeaderComponent = ({siteTitle}) => (
    <Flex className="Header-Container">
        <Box>{siteTitle}</Box>
    </Flex>
)

HeaderComponent.propTypes = {
    siteTitle: PropTypes.string
}

HeaderComponent.defaultProps = {
    siteTitle: ``
}

const Header = styled(HeaderComponent)`
    .Header-Container {
        background-image: linear-gradient(to top, #ff4572, #2a079b);
    }
    
`

export default Header
