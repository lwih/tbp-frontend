import React from 'react'
import {Link, navigate} from 'gatsby'
import HomeLayout from '../layouts/home-layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Search from '../app/modules/search/Search'
import {Box, Flex} from '@rebass/grid';
import AppContainer from '../components/app-container';
import LinkList from '../components/link-list';
import Footer from '../components/footer';
import Card from '../design-system/Cards/card';
import Results from '../app/modules/results/Results'
import Ages from '../app/components/Ages';
import Categories from '../app/components/Categories';
import _get from 'lodash/get'

const AppPage = (props) => (
    <HomeLayout>
        <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
        <Header>
            <Search/>
        </Header>
        <AppContainer p={0} width={1}>
            <Flex my={2} width={1} justifyContent="center">
                <Box width={1}>
                    <Flex>
                        <Box width={1 / 2} pl={2} pr={1}>
                            <Ages
                                locationState={props.location.state}
                                search={_get(props.pageContext, 'appData.search')}/>
                        </Box>
                        <Box width={1 / 2} pr={2} pl={1}>
                            <Categories locationState={props.location.state}/>
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
    </HomeLayout>
)

export default AppPage
