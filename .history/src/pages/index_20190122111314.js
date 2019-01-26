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
        <h1>APP index</h1>
        <Header siteTitle={'The Better Play'}>
            <Search/>
        </Header>

        <Flex my={4} width={1} justifyContent="center">
            <Box width={1}>
                <Results
                    hideLoadMore={false}
                    searchParams={{
                    age_from: 0,
                    age_until: 1200,
                    term: 'lego'
                }}/>
            </Box>
        </Flex>

        <Link to="/">Go to page home</Link>
        <Link to="/seo/">Go to page SEO</Link>
    </AppLayout>
)

export default AppPage
