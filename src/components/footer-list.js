import React from 'react'
import { Flex, Box } from '@rebass/grid'
import InternalLink from '../design-system/Links/internal-link'
import { companyPages, sortPagesByWeight } from '../utils/page-helpers'
import { colors } from '../design-system/theme'
import _get from 'lodash/get'
import { isDesktop } from 'react-device-detect'

const FooterList = ({ data }) => {
  return (
    <Flex
      flexDirection={isDesktop ? 'row' : 'column'}
      justifyContent="flex-end"
    >
      <Box>
        <Flex flexDirection="row" flexWrap="wrap">
          <Box alignSelf="flex-start" width={4 / 10}>
            <InternalLink color={colors.lightBlue} to={'/contact'}>
              Kontakt
            </InternalLink>
          </Box>
          {_get(data, 'allMarkdownRemark.edges') &&
            sortPagesByWeight(
              companyPages(_get(data, 'allMarkdownRemark.edges'))
            ).map((page, index) => {
              return (
                <Box
                  alignSelf={index % 2 === 0 ? 'flex-end' : 'flex-start'}
                  key={index}
                  width={index % 2 === 0 ? 6 / 10 : 4 / 10}
                >
                  <InternalLink
                    color={colors.lightBlue}
                    key={page.node.frontmatter.path + index}
                    to={page.node.frontmatter.path}
                  >
                    {page.node.frontmatter.title}
                  </InternalLink>
                </Box>
              )
            })}
        </Flex>
      </Box>
    </Flex>
  )
}

export default FooterList
