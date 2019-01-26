import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {Flex, Box} from '@rebass/grid'

const HeaderComponent = ({siteTitle}) => (
    <Flex className="">
        <Box>{siteTitle}</Box>
    </Flex>
)

Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

const Header = styled(HeaderComponent)`
    .Header-Container {
        background-image: linear-gradient(to top, #ff4572, #2a079b);
    }
    
`

export default Header
