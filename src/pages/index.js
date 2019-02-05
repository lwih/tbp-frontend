import React from 'react'
import {Link, navigate} from 'gatsby'
import HomeLayout from '../layouts/home-layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Search from '../app/modules/search/Search'
import Results from '../app/modules/results/Results';
import {Flex, Box} from '@rebass/grid';
import AppContainer from '../components/app-container';
import LinkList from '../components/link-list';
import Footer from '../components/footer';

const AppPage = (props) => (
    <HomeLayout>
        <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
        <AppContainer p={0} width={1}>
            <Box width={1}>
                {/* <h2>category preview lego</h2> */}
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
        </AppContainer>

    </HomeLayout>
)

export default AppPage
