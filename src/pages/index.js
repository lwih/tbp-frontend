import React from 'react'
import {navigate} from 'gatsby'
import HomeLayout from '../layouts/home-layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Search from '../app/search'
import {Box, Flex} from '@rebass/grid';
import AppContainer from '../components/app-container';
import Results from '../app/Results'
import Ages from '../app/ages';
import Categories from '../app/categories';
import _get from 'lodash/get'
import WidthContainer from '../components/width-container';
import WordCloud from '../app/wordcloud';
import CookieBannerBar from '../components/cookie-banner-bar';

class AppPage extends React.Component {
    componentDidMount() {
        navigate('/de')
    }

    render() {
        return (<AppPageContent {...this.props}/>)
    }
}

export const AppPageContent = (props) => (
    <HomeLayout>
        <SEO title="Willkommen"/>
        <Header>
            <Search/>
        </Header>
        <AppContainer p={0} width={1}>
            <WidthContainer>
                <Flex mt={3} mb={2} width={1} justifyContent="center">
                    <Box width={1}>
                        <Flex>
                            <Box width={1 / 2} pl={2} pr={2}>
                                <Ages
                                    locationState={props.location.state}
                                    search={_get(props.pageContext, 'appData.search')}/>
                            </Box>
                            <Box width={1 / 2} pr={2} pl={2}>
                                <Categories
                                    locationState={props.location.state}
                                    search={_get(props.pageContext, 'appData.search')}/>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex flexDirection="column">
                    <Box mt={0}>
                        <Results
                            hideLoadMore={false}
                            searchParams={{
                            age_from: 0,
                            age_until: 1200,
                            q: ''
                        }}/>
                    </Box>
                    <Box>
                        <Flex justifyContent="center">
                            <Box
                                width={[
                                1, 2 / 3,
                                2 / 3
                            ]}
                                mb={2}
                                py={3}>
                                <WordCloud searchParams={_get(props.location.state, 'search')}/>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </WidthContainer>
        </AppContainer>
        <CookieBannerBar/>
    </HomeLayout>
)

export default AppPage
