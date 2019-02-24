import React from 'react'
import Header from '../../components/header'
import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
import Search from '../../app/components/search'
import {Flex, Box} from '@rebass/grid'
import Ages from '../../app/components/ages';
import Categories from '../../app/components/categories';
import _get from 'lodash/get'
import {navigate} from 'gatsby';
import Footer from '../../components/footer';
import Results from '../../app/components/Results'
import Result from '../../app/components/Result'
import WidthContainer from '../../components/width-container';

const ResultsPage = (props) => {
    return (
        <AppLayout>
            <React.Fragment>
                <SEO title="Spielzeuge" robots={[`noindex`, `nofollow`]}/>
                <Header siteTitle={'The Better Play'}>
                    <Search
                        value={props.location.state && props.location.state.selectedItem
                        ? _get(props.location.state, 'selectedItem')
                        : _get(props.location.state, 'search.q')}/>
                </Header>

                <WidthContainer>
                    {props.location.state && props.location.state.selectedItem
                        ? (
                            <Flex my={2} width={1} justifyContent="center">
                                <Box width={1} p={2}>
                                    <Result item={_get(props.location.state, 'selectedItem')}/>
                                </Box>
                            </Flex>
                        )
                        : null}

                    <Flex my={3} width={1} justifyContent="center">
                        <Box width={1}>
                            <Flex>
                                <Box width={1 / 2} pl={2} pr={2}>
                                    <Ages
                                        search={_get(props.location.state, 'search')}
                                        locationState={props.location.state}/>
                                </Box>
                                <Box width={1 / 2} pr={2} pl={2}>
                                    <Categories
                                        search={_get(props.location.state, 'search')}
                                        locationState={props.location.state}/>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex my={2} width={1} justifyContent="center">
                        <Box width={1}>
                            <Results
                                hideLoadMore={false}
                                searchParams={_get(props.location.state, 'search')}
                                onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                                state: {
                                    search: _get(props.location.state, 'search'),
                                    selectedItem: item
                                }
                            }))}/>
                        </Box>
                    </Flex>
                </WidthContainer>
            </React.Fragment>
        </AppLayout>
    )
}

export default ResultsPage