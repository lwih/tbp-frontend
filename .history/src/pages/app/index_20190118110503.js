import React from 'react'
import {Link} from 'gatsby'
import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
import Search from '../../app/modules/search/Search'

const AppPage = () => (
  <AppLayout>
    <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>APP index</h1>
    <Search/>

    <Link to="/">Go to page home</Link>
    <Link to="/seo/">Go to page SEO</Link>
  </AppLayout>
)

export default AppPage
