import React from 'react'
import {Link, navigate} from 'gatsby'
import _get from 'lodash/get'
import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
import Header from '../../components/header';
import Search from '../../app/modules/search/Search';
import {Flex, Box} from '@rebass/grid';
import Footer from '../../components/footer';
import TernaryButton from '../../design-system/Buttons/ternary-button';
import InternalLink from '../../design-system/Links/internal-link';
import {ResultSkeletonComponent} from '../../app/modules/result/Result';
import Ages from '../../app/components/Ages';
import Categories from '../../app/components/Categories';
const Results = React.lazy(() => import ('../../app/modules/results/Results'));
const Result = React.lazy(() => import ('../../app/modules/result/Result'));

const DetailsPage = (props) => {
    debugger
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
                    <React.Suspense fallback={ResultSkeletonComponent}>
                        <Result item={_get(props.location.state, 'selectedItem')}/>
                    </React.Suspense>
                </Box>
            </Flex>
            <Flex my={4} width={1} justifyContent="center" flexDirection="column">
                <Box width={1} mx={3}>
                    <h3 style={{
                        marginBottom: 0
                    }}>Similar toys</h3>
                </Box>
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
                <Box width={1}>
                    <React.Suspense
                        fallback={(
                        <div>
                            loading
                        </div>
                    )}>
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
                    </React.Suspense>

                </Box>
            </Flex>
        </AppLayout>
    )
}

export default DetailsPage
