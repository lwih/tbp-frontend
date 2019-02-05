import React from 'react'
import {Link, navigate} from 'gatsby'
import _get from 'lodash/get'
import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
import Header from '../../components/header';
import Search from '../../app/modules/search/Search';
import {Flex, Box} from '@rebass/grid';
import Results from '../../app/modules/results/Results';
import Result from '../../app/modules/result/Result';
import Footer from '../../components/footer';

const DetailsPage = (props) => {
    return (
        <AppLayout>
            <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
            <Header siteTitle={'The Better Play'}>
                {/* <Search
                    value={props.location.state && props.location.state.selectedItem
                    ? _get(props.location.state, 'selectedItem')
                    : _get(props.location.state, 'search.q')}/> */}
            </Header>
            <Flex my={2} width={1} justifyContent="center">
                <Box width={1}>
                    <Result item={_get(props.location.state, 'selectedItem')}/>
                </Box>
            </Flex>
            <Flex my={4} width={1} justifyContent="center" flexDirection="column">
                <Box width={1} mx={3}>
                    <h3 style={{
                        marginBottom: 0
                    }}>Alternative results</h3>
                </Box>
                <Box width={1}>
                    <Results
                        hideLoadMore={false}
                        searchParams={_get(props.location.state, 'search') || {
                        age_from: 0,
                        age_until: 1200
                    }}
                        onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                        state: {
                            selectedItem: item
                        }
                    }))}/>
                </Box>
            </Flex>
        </AppLayout>
    )
}

export default DetailsPage
