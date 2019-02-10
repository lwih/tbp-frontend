import React from 'react'
import Header from '../../components/header'
import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
import Search from '../../app/modules/search/Search'
import {Flex, Box} from '@rebass/grid'
import Ages from '../../app/components/Ages';
import Categories from '../../app/components/Categories';
import _get from 'lodash/get'
import {navigate} from 'gatsby';
import Footer from '../../components/footer';
const Results = React.lazy(() => import ('../../app/modules/results/Results'));
const Result = React.lazy(() => import ('../../app/modules/result/Result'));

const ResultsPage = (props) => {
    debugger;
    return (
        <AppLayout >
            <React.Fragment>
                {/* <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/> */}
                <Header siteTitle={'The Better Play'}>
                    <Search
                        value={props.location.state && props.location.state.selectedItem
                        ? _get(props.location.state, 'selectedItem')
                        : _get(props.location.state, 'search.q')}/>
                </Header>

                {props.location.state && props.location.state.selectedItem
                    ? (
                        <Flex my={2} width={1} justifyContent="center">
                            <Box width={1} p={2}>
                                <Result item={_get(props.location.state, 'selectedItem')}/>
                            </Box>
                        </Flex>
                    )
                    : null}

                <Flex my={2} width={1} justifyContent="center">
                    <Box width={1}>
                        <Flex>
                            <Box width={1 / 2} pl={2} pr={1}>
                                <Ages
                                    search={props.location.state.search}
                                    locationState={props.location.state}/>
                            </Box>
                            <Box width={1 / 2} pr={2} pl={1}>
                                <Categories locationState={props.location.state}/>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex my={2} width={1} justifyContent="center">
                    <Box width={1}>
                        <React.Suspense fallback={< div > Loading ...</div>}>
                            <Results
                                hideLoadMore={false}
                                searchParams={_get(props.location.state, 'search')}
                                onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                                state: {
                                    search: _get(props.location.state, 'search'),
                                    selectedItem: item
                                }
                            }))}/>
                        </React.Suspense>

                    </Box>
                </Flex>
            </React.Fragment>
        </AppLayout>
    )
}

export default ResultsPage