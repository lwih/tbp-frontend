import React from 'react'
import {Link} from 'gatsby'
import AppLayout from '../layouts/app-layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Search from '../app/modules/search/Search'
import Results from '../app/modules/results/Results';
import {Flex, Box} from '@rebass/grid';

const AppPage = () => (
    <AppLayout>
        <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
        <Header siteTitle={'The Better Play'}>
            <Search/>
        </Header>

        <Flex my={4} width={1} justifyContent="center">
            <Box width={1}>
                <h2>category preview lego</h2>
                <Results
                    hideLoadMore={false}
                    itemsAmount={4}
                    searchParams={{
                    age_from: 0,
                    age_until: 1200,
                    q: 'lego'
                }}/>
                <h2>category preview musik</h2>
                <Results
                    hideLoadMore={false}
                    itemsAmount={4}
                    searchParams={{
                    age_from: 0,
                    age_until: 1200,
                    q: 'musik'
                }}/>
            </Box>
        </Flex>

        <Link to="/">Go to page home</Link>
        <Link to="/seo/">Go to page SEO</Link>
    </AppLayout>
)

export default AppPage
