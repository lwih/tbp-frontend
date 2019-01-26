import React from 'react'
import {Link} from 'gatsby'

import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
// import Root from '../../app/components/Root' import Results from
// '../../app/components/connected/Results' import Search from
// '../../app/components/connected/Search'

import Results from '../../app/modules/results/Results'
import Result from '../../app/modules/results/Result'
import Search from '../../app/modules/search/Search'

const ResultsPage = (props) => (
    <AppLayout>
        <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
        <div>
            <Search
                value={props.location.state.selectedItem
                ? props.location.state.selectedItem
                : props.location.state.search.term}/>
        </div>
        <div>
            {this.props.location.state.selectedItem
                ? (<Result item={this.props.location.state.selectedItem}/>)
                : null}
        </div>
        <div>
            <Results hideLoadMore={false} searchParams={props.location.state.search}/></div>
        < Link to="/">
            Go to page home < /Link>
        </AppLayout >