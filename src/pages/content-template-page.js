import React from "react"
import {graphql, navigate} from "gatsby"
import ContentLayout from '../layouts/company-content-layout'
import Header from '../components/header';
import Search from '../app/components/search';
import AppContainer from '../components/app-container'
import Results from '../app/components/Results';
import SEO from '../components/seo';
import _get from 'lodash/get'
import {Box, Flex} from '@rebass/grid'
import Ages from '../app/components/ages';
import Categories from '../app/components/categories';
import Card from '../design-system/Cards/card';

export default function Template(props) {
    const {markdownRemark: post} = props.data
    const frontmatterAppData = _get(props.data, 'markdownRemark.frontmatter.appData')

    try {
        JSON.parse(frontmatterAppData)
    } catch (e) {}

    return (
        <ContentLayout>
            <SEO title={_get(post, 'frontmatter.title')}/>

            <Header siteTitle={'The Better Play'}>
                <Search/>
            </Header>

            <AppContainer py={2} width={1} justifyContent="center">
                <Box width={1} p={2}>
                    <Card>
                        <Flex justifyContent="center">
                            <h3
                                style={{
                                marginBottom: 0
                            }}>{_get(post, 'frontmatter.title')}</h3>

                        </Flex>
                    </Card>
                </Box>
                <Flex my={2} width={1} justifyContent="center">
                    <Box width={1}>
                        <Flex>
                            <Box width={1 / 2} pl={2} pr={1}>
                                <Ages
                                    locationState={props.location.state}
                                    search={_get(props.pageContext, 'appData.search')}/>
                            </Box>
                            <Box width={1 / 2} pr={2} pl={1}>
                                <Categories
                                    locationState={props.location.state}
                                    search={_get(props.pageContext, 'appData.search')}/>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Box width={1}>
                    <Results
                        hideLoadMore={false}
                        searchParams={{
                        age_from: _get(props.pageContext, 'appData.search.age_from'),
                        age_until: _get(props.pageContext, 'appData.search.age_until'),
                        q: _get(props.pageContext, 'appData.search.q')
                    }}
                        onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                        state: {
                            selectedItem: item
                        }
                    }))}/>

                    <Box p={3}>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: _get(post, 'html')
                        }}/>
                    </Box>
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
    }
`
