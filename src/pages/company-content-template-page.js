import React from "react"
import {Helmet} from "react-helmet"
import {graphql, navigate} from "gatsby"
import CompanyContentLayout from '../layouts/company-content-layout'
import Header, {HeaderTitle} from '../components/header';
import Search from '../app/components/search';
import AppContainer from '../components/app-container';
import {Box} from '@rebass/grid';
import Results from '../app/components/Results';
import SEO from '../components/seo';
import Footer from '../components/footer';
import _get from 'lodash/get'

export default function Template(props) {
    const {markdownRemark: post} = props.data
    return (
        <CompanyContentLayout>
            <Header>
                <HeaderTitle title={_get(post, 'frontmatter.title')}/>
            </Header>
            <div>
                <Box width={1} p={4}>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: _get(post, 'html')
                    }}/>
                </Box>
            </div>
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