import React from 'react'
import {Link} from 'gatsby'

import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'

const DetailsPage = () => (
  <AppLayout>
    <SEO title="App" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>DETAILS</h1>
  </AppLayout>
)

export default DetailsPage
