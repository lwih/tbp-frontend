import React from 'react'
import {Link} from 'gatsby'

import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
// import Root from '../../app/components/Root' import Results from
// '../../app/components/connected/Results' import Search from
// '../../app/components/connected/Search'

import Results from '../../app/modules/results/Results'
import Search from '../../app/modules/search/Search'

const ResultsPage = () => (
    <AppLayout>
        <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
        <div>
            <Search/>
        </div>
        <div>
            <Results hideLoadMore={false} searchParams={this.props.location.state.search}/>
        </div>

        <Link to="/">Go to page home</Link>
    </AppLayout>
)

export default ResultsPage
