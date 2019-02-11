import React from 'react'
import {Link, navigate} from 'gatsby'
import _get from 'lodash/get'
import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
import Header from '../../components/header';
import Search from '../../app/components/search';
import Results from '../../app/components/Results'
import Result from '../../app/components/Result'
import {Flex, Box} from '@rebass/grid';
import Footer from '../../components/footer';
import TernaryButton from '../../design-system/Buttons/ternary-button';
import InternalLink from '../../design-system/Links/internal-link';
import {ResultSkeletonComponent} from '../../app/components/Result';
import Ages from '../../app/components/ages';
import Categories from '../../app/components/categories';

const DetailsPage = (props) => {
    return (
        <AppLayout>
            <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
            <Header siteTitle={'The Better Play'}>
                <Flex>
                    <Box width={1 / 4}>
                        <TernaryButton
                            onClick={() => navigate('/app/results', Object.assign({}, props.location.state, {
                            state: {
                                search: _get(props.location.state, 'search')
                            }
                        }))}
                            size="tiny">{'< Zurück'}</TernaryButton>
                    </Box>
                </Flex>
            </Header>
            <Flex my={2} width={1} justifyContent="center">
                <Box width={1} p={2}>
                    <Result
                        location={props.location}
                        item={_get(props.location.state, 'selectedItem')}/>
                </Box>
            </Flex>
            <Flex my={4} width={1} justifyContent="center" flexDirection="column">
                <Box width={1} px={3}>
                    <h3 style={{
                        marginBottom: 0
                    }}>Similar toys</h3>
                </Box>
                <Flex my={2} width={1} justifyContent="center">
                    <Box width={1}>
                        <Flex>
                            <Box width={1 / 2} pl={2} pr={1}>
                                <Ages
                                    search={_get(props.locationstate, 'search')}
                                    locationState={props.location.state}/>
                            </Box>
                            <Box width={1 / 2} pr={2} pl={1}>
                                <Categories locationState={props.location.state}/>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Box width={1}>
                    <Results
                        hideLoadMore={false}
                        searchParams={_get(props.location.state, 'search') || {
                        age_from: 0,
                        age_until: 1200
                    }}
                        onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
                        state: {
                            search: _get(props.location.state, 'search'),
                            selectedItem: item
                        }
                    }))}/>
                </Box>
            </Flex>
        </AppLayout>
    )
}

export default DetailsPage
