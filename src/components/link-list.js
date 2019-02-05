import React from "react"
import styled from 'styled-components'
import {StaticQuery, graphql, Link} from 'gatsby'
import {routeWithLanguage} from '../utils/routeHelper'
import {Flex} from '@rebass/grid'
import InternalLink from '../design-system/Links/internal-link'
import {seoPages, sortPagesByWeight} from '../utils/pageHelpers';

const LinkListBackground = styled.div `
  width: 100%;
  text-align: center;
  line-height: 2;
  position: relative;
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
                    <Flex flexDirection="column" p={4}>
                        {sortPagesByWeight(seoPages(data.allMarkdownRemark.edges)).map((page, index) => {
                            return (
                                <InternalLink
                                    key={page.node.frontmatter.path + index}
                                    to={page.node.frontmatter.path}>{page.node.frontmatter.title}</InternalLink>
                            )
                        })}
                    </Flex>
                </LinkListContent>
            </LinkListBackgroundImage>
        </LinkListBackground>
    )
}

export default LinkList
