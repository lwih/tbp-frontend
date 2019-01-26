import React from 'react'
import {Link} from 'gatsby'

import AppLayout from '../layouts/app-layout'
import SEO from '../components/seo'

const ResultsPage = () => (
  <AppLayout>
    <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>RESULTS</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/">Go to page home</Link>
    <Link to="/seo/">Go to page SEO</Link>
  </AppLayout>
)

export default ResultsPage
