import React from 'react'
import {Link, navigate} from 'gatsby'

import CMSLayout from '../layouts/content-layout'
import SEO from '../components/seo'
import Search from '../app/modules/search/Search';
import AppContainer from '../components/AppContainer';
import Header from '../components/header';
import {Box} from '@rebass/grid';
import Results from '../app/modules/results/Results';

const ContentPage = (props) => (
  <CMSLayout>
    <SEO title="SEO" keywords={[`gatsby`, `application`, `react`]}/>

    <Header siteTitle={'The Better Play'}>
      <Search/>
    </Header>

    <AppContainer py={4} width={1} justifyContent="center">
      <Box width={1}>
        <h2>category preview lego</h2>
        <Results
          hideLoadMore={false}
          itemsAmount={4}
          searchParams={{
          age_from: 0,
          age_until: 1200,
          q: 'lego'
        }}
          onSelectItem={(item) => navigate('/app/details', Object.assign({}, props.location.state, {
          state: {
            selectedItem: item
          }
        }))}/>

      </Box>
    </AppContainer>
  </CMSLayout>
)

export default ContentPage
