import React from 'react'
import {Link, navigate} from 'gatsby'
import HomeLayout from '../layouts/home-layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Search from '../app/components/search'
import {Box, Flex} from '@rebass/grid';
import AppContainer from '../components/app-container';
import LinkList from '../components/link-list';
import Footer from '../components/footer';
import Card from '../design-system/Cards/card';
import Results from '../app/components/Results'
import Ages from '../app/components/ages';
import Categories from '../app/components/categories';
import _get from 'lodash/get'
import WidthContainer from '../components/width-container';

const AppPage = (props) => (
    <HomeLayout>
        <SEO title="Willkommen"/>
        <Header>
            <Search/>
        </Header>
        <WidthContainer>
            <AppContainer p={0} width={1}>
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
                </Flex>
            </AppContainer>
        </WidthContainer>

    </HomeLayout>
)

export default AppPage
