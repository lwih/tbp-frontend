import React from "react"
import styled from 'styled-components'
import {StaticQuery, graphql, Link} from 'gatsby'
import {routeWithLanguage} from '../utils/routeHelper'
import {Flex, Box} from '@rebass/grid'
import InternalLink from '../design-system/Links/internal-link'
import {companyPages, sortPagesByWeight} from '../utils/pageHelpers';
import {colors} from '../design-system/theme';
import _get from 'lodash/get'
import {isMobile} from 'react-device-detect';

const FooterList = ({data}) => {
    return (
        <Flex
            flexDirection={isMobile
            ? 'column'
            : 'row'}
            justifyContent="flex-end">

            <Box alignSelf="flex-end" pl={2}>
                <InternalLink color={colors.lightBlue} to={'/contact'}>Kontakt</InternalLink>
            </Box>

            {_get(data, 'allMarkdownRemark.edges') && sortPagesByWeight(companyPages(_get(data, 'allMarkdownRemark.edges'))).map((page, index) => {
                return (
                    <Box alignSelf="flex-end" key={index} pl={2}>
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
