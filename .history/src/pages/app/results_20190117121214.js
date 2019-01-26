import React from 'react'
import {Link} from 'gatsby'

import AppLayout from '../../../../layouts/app-layout'
import SEO from '../../../../components/seo'
import Root from '../../app/components/Root'
import Results from '../../app/components/connected/Results'
import Search from '../../app/components/connected/Search'

const ResultsPage = () => (
  <AppLayout>
    <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>RESULTS</h1>
    <div id="SearchContainer"></div>
    <Root>
      <Search/>
    </Root>
    <div>usp</div>
    <div>
      <Root>
        <Results
          hideLoadMore={false}
          searchParams={{
          age_from: '0',
          age_until: '120'
        }}/>
      </Root>
    </div>
    <div id="tbp-app-wrapper"></div>

    <Link to="/">Go to page home</Link>
    <Link to="/seo/">Go to page SEO</Link>
  </AppLayout>
)

export default ResultsPage
