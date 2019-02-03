import React from "react"
import {Helmet} from "react-helmet"
import {graphql, navigate} from "gatsby"
import ContentLayout from '../layouts/content-layout'
import Header from '../components/header';
import Search from '../app/modules/search/Search';
import AppContainer from '../components/app-container';
import {Box} from '@rebass/grid';
import Results from '../app/modules/results/Results';
import SEO from '../components/seo';
import Footer from '../components/footer';
import _get from 'lodash/get'

export default function Template(props) {
    const {markdownRemark: post} = props.data

    return (
        <ContentLayout>
            <SEO title="SEO" keywords={[`gatsby`, `application`, `react`]}/>

            <Header siteTitle={'The Better Play'}></Header>

            <div>
                <Box width={1}>
                    <div>
                        <h1>{_get(post, 'frontmatter.title')}</h1>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: _get(post, 'html')
                        }}/>
                    </div>
                </Box>
            </div>
        </ContentLayout>
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
    }
`