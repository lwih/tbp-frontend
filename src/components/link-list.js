import React from "react"
import styled from 'styled-components'
import {StaticQuery, graphql, Link} from 'gatsby'
import {routeWithLanguage} from '../utils/routeHelper'
import {Flex, Box} from '@rebass/grid'
import InternalLink from '../design-system/Links/internal-link'
import {seoPages, sortPagesByWeight} from '../utils/pageHelpers';
import {colors} from '../design-system/theme';
import WidthContainer from './width-container';

const LinkListBackground = styled.div `
  width: 100%;
  text-align: center;
  line-height: 2;
  position: relative;
  border-top: 1px solid ${colors.sortOfPinkLight};
  box-shadow: 0px 0px 2px 2px ${colors.sortOfPinkLight};
`
const LinkListBackgroundImage = styled.div `
  &::after {
    background: url(https://d33wubrfki0l68.cloudfront.net/592a39a61bc0f12077ac2d2801584b34444184f2/c035a/images/pattern-confetti.png);
      background-repeat: repeat;
      content: "";
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
const LinkListContent = styled.div `
  position: relative;
  z-index: 1;
`

const LinkList = ({data}) => {
    return (
        <LinkListBackground>
            <LinkListBackgroundImage>
                <LinkListContent>
                    <WidthContainer>
                        <Flex p={4} flexWrap="wrap">
                            {sortPagesByWeight(seoPages(data.allMarkdownRemark.edges)).map((page, index) => {
                                return (
                                    <Box
                                        width={[
                                        1, 1 / 2,
                                        1 / 3
                                    ]}>
                                        <InternalLink
                                            key={page.node.frontmatter.path + index}
                                            to={page.node.frontmatter.path}>{page.node.frontmatter.title}
                                        </InternalLink>
                                    </Box>
                                )
                            })}
                        </Flex>
                    </WidthContainer>
                </LinkListContent>
            </LinkListBackgroundImage>
        </LinkListBackground>
    )
}

export default LinkList
