import React from 'react'
import {Link} from 'gatsby'

import HomeLayout from '../layouts/home-layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/results/">Go to page results</Link>
    <Link to="/seo/">Go to page SEO</Link>
  </HomeLayout>
)

export default IndexPage
