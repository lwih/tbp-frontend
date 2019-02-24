import React from "react"
import {Helmet} from "react-helmet"
import {graphql, navigate} from "gatsby"
import CompanyContentLayout from '../layouts/company-content-layout'
import Header, {HeaderTitle} from '../components/header';
import Search from '../app/components/search';
import AppContainer from '../components/app-container';
import {Box, Flex} from '@rebass/grid';
import Results from '../app/components/Results';
import SEO from '../components/seo';
import Footer from '../components/footer';
import _get from 'lodash/get'
import WidthContainer from '../components/width-container';

export default function Template(props) {
    const {markdownRemark: post} = props.data
    return (
        <CompanyContentLayout>
            <SEO title={_get(post, 'frontmatter.title')}/>
            <Header/>
            <WidthContainer>
                <Flex justifyContent="center" flexDirection="column">
                    <Box
                        width={1}
                        py={4}
                        alignSelf="center"
                        style={{
                        textAlign: 'center'
                    }}>
                        <h1>{_get(post, 'frontmatter.title')}</h1>
                    </Box>
                    <Box width={1} p={2}>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: _get(post, 'html')
                        }}/>
                    </Box>
                </Flex>
            </WidthContainer>
        </CompanyContentLayout>
    )
}

export const pageQuery = graphql `
    query CompanyPages($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                appData
            }
        }
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