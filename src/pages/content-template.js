import React from "react"
import {Helmet} from "react-helmet"
import {graphql, navigate} from "gatsby"
import ContentLayout from '../layouts/company-content-layout'
import Header from '../components/header';
import Search from '../app/modules/search/Search';
import AppContainer from '../components/app-container'
import Results from '../app/modules/results/Results';
import SEO from '../components/seo';
import _get from 'lodash/get'
import {Box} from '@rebass/grid'

export default function Template(props) {
    const {markdownRemark: post} = props.data
    const frontmatterAppData = _get(props.data, 'markdownRemark.frontmatter.appData')
    let appData = {
        age_from: 0,
        age_until: 1200
    }
    try {
        JSON.parse(frontmatterAppData)
    } catch (e) {}

    return (
        <ContentLayout>
            <SEO title="SEO" keywords={[`gatsby`, `application`, `react`]}/>

            <Header siteTitle={'The Better Play'}>
                <Search/>
            </Header>

            <AppContainer py={4} width={1} justifyContent="center">
                <Box width={1}>
                    <h2>category preview lego</h2>
                    <Results
                        hideLoadMore={false}
                        itemsAmount={4}
                        searchParams={{
                        age_from: appData.age_from,
                        age_until: appData.age_until,
                        q: ''
                    }}
                        onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                        state: {
                            selectedItem: item
                        }
                    }))}/>

                    <div>
                        <h1>{_get(post, 'frontmatter.title')}</h1>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: _get(post, 'html')
                        }}/>
                    </div>
                </Box>
            </AppContainer>
        </ContentLayout>
    )
}

export const pageQuery = graphql `
    query ContentPages($path: String!) {
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