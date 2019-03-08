import React from "react"
import {graphql, navigate} from "gatsby"
import ContentLayout from '../layouts/company-content-layout'
import Header from '../components/header';
import Search from '../app/search';
import AppContainer from '../components/app-container'
import Results from '../app/Results';
import SEO from '../components/seo';
import _get from 'lodash/get'
import {Box, Flex} from '@rebass/grid'
import Ages from '../app/ages';
import Categories from '../app/categories';
import Card from '../design-system/Cards/card';
import WidthContainer from '../components/width-container';
import WordCloud from '../app/wordcloud';
import {colors} from '../design-system/theme';

export default function Template(props) {
    const {markdownRemark: post} = props.data
    const frontmatterAppData = _get(props.data, 'markdownRemark.frontmatter.appData')

    try {
        JSON.parse(frontmatterAppData)
    } catch (e) {}

    return (
        <ContentLayout>
            <SEO title={_get(post, 'frontmatter.title')}/>

            <Header title={_get(post, 'frontmatter.title')}>
                <Search/>
            </Header>

            <AppContainer py={2} width={1} justifyContent="center">
                <WidthContainer>
                    <Flex mt={3} mb={2} width={1} justifyContent="center">
                        <Box width={1}>
                            <Flex>
                                <Box width={1 / 2} pl={2} pr={2}>
                                    <Ages
                                        locationState={props.location.state}
                                        search={_get(props.pageContext, 'appData.search')}/>
                                </Box>
                                <Box width={1 / 2} pr={2} pl={2}>
                                    <Categories
                                        locationState={props.location.state}
                                        search={_get(props.pageContext, 'appData.search')}/>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box width={1}>
                            <Results
                                hideLoadMore={false}
                                searchParams={{
                                age_from: _get(props.pageContext, 'appData.search.age_from'),
                                age_until: _get(props.pageContext, 'appData.search.age_until'),
                                q: _get(props.pageContext, 'appData.search.q')
                            }}/>

                        </Box>
                        <Box>
                            <Flex justifyContent="center">
                                <Box
                                    width={[
                                    1, 2 / 3,
                                    2 / 3
                                ]}
                                    mb={2}p={3} >
                                    <WordCloud
                                        searchParams={_get(props.location.state, 'search')}
                                        onClickCloud={category => this.onClickCloud(category)}/>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </WidthContainer>
            </AppContainer>
            <WidthContainer>
                <Flex
                    flexDirection="column"
                    style={{
                    borderTop: `1px solid ${colors.sortOfPinkLight}`
                }}>
                    <Box p={3} mt={4}>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: _get(post, 'html')
                        }}/>
                    </Box>
                </Flex>
            </WidthContainer>
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
