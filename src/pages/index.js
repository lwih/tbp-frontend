import React from 'react'
import {Link, navigate} from 'gatsby'
import AppLayout from '../layouts/app-layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Search from '../app/modules/search/Search'
import Results from '../app/modules/results/Results';
import {Flex, Box} from '@rebass/grid';
import AppContainer from '../components/app-container';
import LinkList from '../components/link-list';
import Footer from '../components/footer';

const AppPage = (props) => (
    <AppLayout>
        <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
        <Header siteTitle={'The Better Play'}>
            <Search/>
        </Header>

        <AppContainer p={0} width={1}>
            <Box width={1}>
                <h2>category preview lego</h2>
                <Results
                    hideLoadMore={false}
                    itemsAmount={4}
                    searchParams={{
                    age_from: 0,
                    age_until: 1200,
                    q: 'lego'
                }}
                    onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                    state: {
                        selectedItem: item
                    }
                }))}/>
                <Results
                    hideLoadMore={false}
                    itemsAmount={4}
                    searchParams={{
                    age_from: 0,
                    age_until: 1200,
                    q: 'musik'
                }}
                    onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                    state: {
                        selectedItem: item
                    }
                }))}/>
            </Box>
        </AppContainer>

    </AppLayout>
)

export default AppPage
