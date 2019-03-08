import React from 'react'
import Header from '../../components/header'
import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
import Search from '../../app/search'
import {Flex, Box} from '@rebass/grid'
import Ages from '../../app/ages';
import Categories from '../../app/categories';
import _get from 'lodash/get'
import {navigate} from 'gatsby';
import Footer from '../../components/footer';
import Results from '../../app/Results'
import Result from '../../app/Result'
import WidthContainer from '../../components/width-container';
import WordCloud from '../../app/wordcloud';

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

                    <Flex mt={3} mb={2} width={1} justifyContent="center">
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
                    <Flex my={2} width={1} justifyContent="center" flexDirection="column">
                        <Box width={1}>
                            <Results
                                hideLoadMore={false}
                                searchParams={_get(props.location.state, 'search')}/>
                        </Box>
                        <Box>
                            <Flex justifyContent="center">
                                <Box
                                    width={[
                                    1, 2 / 3,
                                    2 / 3
                                ]}
                                    mb={2}p={3} >
                                    <WordCloud
                                        searchParams={_get(props.location.state, 'search')}
                                        onClickCloud={category => this.onClickCloud(category)}/>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </WidthContainer>
            </React.Fragment>
        </AppLayout>
    )
}

export default ResultsPage