import React from 'react'
import {Link, navigate} from 'gatsby'
import HomeLayout from '../layouts/home-layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Search from '../app/modules/search/Search'
import {Box, Flex} from '@rebass/grid';
import AppContainer from '../components/app-container';
import LinkList from '../components/link-list';
import Footer from '../components/footer';
import Card from '../design-system/Cards/card';
import Results from '../app/modules/results/Results'

const AppPage = (props) => (
    <HomeLayout>
        <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
        <Header>
            <Search/>
        </Header>
        <AppContainer p={0} width={1}>
            <Flex flexDirection="column">
                <Box width={1} p={2}>
                    <Card>
                        <Flex flexDirection="column">
                            <Box>
                                <Flex>
                                    <Box pr={2} width={75}>
                                        <b>Qualitat</b>
                                    </Box>
                                    <Box>Gute Spielsachen für Kinder</Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex>
                                    <Box pr={2} width={75}>
                                        <b>Neutral</b>
                                    </Box>
                                    <Box>
                                        Kein Gender Marketing, Spass für alle
                                    </Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex>
                                    <Box pr={2} width={75}>
                                        <b>Easy</b>
                                    </Box>
                                    <Box>Tolle Geschenke schnell gefunden</Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
                <Box>
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
            </Flex>
        </AppContainer>

    </HomeLayout>
)

export default AppPage
