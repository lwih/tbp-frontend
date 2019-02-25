import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import _get from 'lodash/get'
// import Root from '../app/components/Root' import Results from
// '../app/components/connected/Results' import Search from
// '../app/components/connected/Search'

import Header from '../components/header'
import './layout.css'
import LinkList from '../components/link-list';
import Footer from '../components/footer';
import {Box, Flex} from '@rebass/grid';
import SEO from '../components/seo';
import Search from '../app/search';
import {colors} from '../design-system/theme';

const companyContentQuery = graphql `
  query CompanyContentPages{
    site { 
        siteMetadata { 
            title 
        } 
    }
    allMarkdownRemark {
      edges {
        node{
          frontmatter {
            title
            path
            language
            weight
            pageType
          }
        }
      }
    }
  }
`

const CompanyContentLayout = (props) => {
    return (
        <StaticQuery
            query={companyContentQuery}
            render={data => {
            return (
                <React.Fragment>
                    <Flex my={0} mx="auto" bg={colors.white} flexDirection="column">
                        {props.children}
                    </Flex>
                    <LinkList data={data}/>
                    <Footer data={data}/>
                </React.Fragment>
            )
        }}/>
    )
}

CompanyContentLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default CompanyContentLayout
