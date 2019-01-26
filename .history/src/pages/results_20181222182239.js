import React from 'react'
import {Link} from 'gatsby'

import ResultsLayout from '../layouts/results-layout'
import Image from '../components/image'
import SEO from '../components/seo'

const ResultsPage = () => (
  <ResultsLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{
      maxWidth: `300px`,
      marginBottom: `1.45rem`
    }}>
      <Image/>
    </div>
    <Link to="/">Go to page home</Link>
    <Link to="/seo/">Go to page SEO</Link>
  </ResultsLayout>
)

export default ResultsPage
