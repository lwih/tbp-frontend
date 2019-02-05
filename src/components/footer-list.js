import React from "react"
import styled from 'styled-components'
import {StaticQuery, graphql, Link} from 'gatsby'
import {routeWithLanguage} from '../utils/routeHelper'
import {Flex, Box} from '@rebass/grid'
import InternalLink from '../design-system/Links/internal-link'
import {companyPages, sortPagesByWeight} from '../utils/pageHelpers';
import {colors} from '../design-system/theme';
import _get from 'lodash/get'

const FooterList = ({data}) => {
    return (
        <Flex flexDirection="column" justifyContent="flex-end">
            {sortPagesByWeight(companyPages(_get(data, 'allMarkdownRemark.edges')).map((page, index) => {
                return (
                    <Box alignSelf="flex-end" key={index}>
                        <InternalLink
                            color={colors.lightBlue}
                            key={page.node.frontmatter.path + index}
                            to={page.node.frontmatter.path}>{page.node.frontmatter.title}</InternalLink>
                    </Box>
                )
            })}
        </Flex>
    )
}

export default FooterList
