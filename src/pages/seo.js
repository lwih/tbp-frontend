import React from 'react'
import {Link} from 'gatsby'

import CMSLayout from '../layouts/cms-layout'
import SEO from '../components/seo'

const SEOPage = () => (
  <CMSLayout>
    <SEO title="SEO" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/">Go to page home</Link>
    <Link to="/seo/">Go to page results</Link>
  </CMSLayout>
)

export default SEOPage
