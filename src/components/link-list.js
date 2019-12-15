import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import InternalLink from '../design-system/Links/internal-link'
import { seoPages, sortPagesByWeight } from '../utils/page-helpers'
import { colors } from '../design-system/theme'
import WidthContainer from './width-container'

const LinkListBackground = styled.div`
  width: 100%;
  text-align: center;
  line-height: 2;
  position: relative;
  border-top: 1px solid ${colors.sortOfPinkLight};
  box-shadow: 0px 0px 2px 2px ${colors.sortOfPinkLight};
`
const LinkListBackgroundImage = styled.div`
  &::after {
    background: url(/images/pattern-confetti.png);
    background-repeat: repeat;
    content: '';
    opacity: 0.4;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    max-height: 360px;
  }
`
const LinkListContent = styled.div`
  position: relative;
  z-index: 1;
`

const LinkList = ({ data }) => {
  return (
    <LinkListBackground>
      <LinkListBackgroundImage>
        <LinkListContent>
          <WidthContainer>
            <Flex p={4} flexWrap="wrap">
              {sortPagesByWeight(seoPages(data.allMarkdownRemark.edges)).map(
                (page, index) => {
                  return (
                    <Box key={index} width={[1, 1 / 2, 1 / 3]}>
                      <InternalLink
                        key={page.node.frontmatter.path + index}
                        to={page.node.frontmatter.path}
                      >
                        {page.node.frontmatter.title}
                      </InternalLink>
                    </Box>
                  )
                }
              )}
            </Flex>
          </WidthContainer>
        </LinkListContent>
      </LinkListBackgroundImage>
    </LinkListBackground>
  )
}

export default LinkList
