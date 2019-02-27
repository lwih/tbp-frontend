import React from 'react'
import {Link, navigate} from 'gatsby'
import HomeLayout from '../layouts/home-layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Search from '../app/search'
import {Box, Flex} from '@rebass/grid';
import AppContainer from '../components/app-container';
import LinkList from '../components/link-list';
import Footer from '../components/footer';
import Card from '../design-system/Cards/card';
import Results from '../app/Results'
import Ages from '../app/ages';
import Categories from '../app/categories';
import _get from 'lodash/get'
import WidthContainer from '../components/width-container';
import WordCloud from '../app/wordcloud';

const AppPage = (props) => (
    <HomeLayout>
        <SEO title="Willkommen"/>
        <Header>
            <Search/>
        </Header>
        <AppContainer p={0} width={1}>
            <WidthContainer>
                <Flex my={3} width={1} justifyContent="center">
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
                    <Box mt={1}>
                        <Results
                            hideLoadMore={false}
                            searchParams={{
                            age_from: 0,
                            age_until: 1200,
                            q: ''
                        }}
                            onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                            state: {
                                selectedItem: item
                            }
                        }))}/>
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

    </HomeLayout>
)

export default AppPage
