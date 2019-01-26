import React from 'react'
import Header from '../../components/header'
import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
import Results from '../../app/modules/results/Results'
import Result from '../../app/modules/result/Result'
import Search from '../../app/modules/search/Search'
import {Flex, Box} from '@rebass/grid'
import Ages from '../../app/components/Ages';
import Categories from '../../app/components/Categories';
import _get from 'lodash/get'

const ResultsPage = (props) => (
    <AppLayout >
        {/* <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/> */}
        <Header siteTitle={'The Better Play'}>
            <Search
                value={props.location.state && props.location.state.selectedItem
                ? _get(props.location.state, 'selectedItem')
                : _get(props.location.state, 'search.q')}/>
        </Header>
        <Flex my={4} width={1} justifyContent="center">
            <Box width={2 / 3}>
                {props.location.state && props.location.state.selectedItem
                    ? (<Result item={_get(props.location.state, 'selectedItem')}/>)
                    : null}
            </Box>

        </Flex>
        <Flex my={4} width={1} justifyContent="center">
            <Box width={1}>
                <Ages locationState={props.location.state}/>
                <Categories locationState={props.location.state}/>
            </Box>
        </Flex>
        <Flex my={4} width={1} justifyContent="center">
            <Box width={1}>
                <Results
                    hideLoadMore={false}
                    searchParams={_get(props.location.state, 'search')}/>
            </Box>
        </Flex>

    </AppLayout>
)

export default ResultsPage