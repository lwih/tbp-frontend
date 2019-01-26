import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {Flex, Box} from '@rebass/grid'

const Header = ({siteTitle}) => (
    <Flex>
        <Box>{siteTitle}</Box>
    </Flex>
)

Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header
