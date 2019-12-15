import React from 'react'

import HomeLayout from '../layouts/home-layout'
import SEO from '../components/seo'
import Header from '../components/header'

const NotFoundPage = () => (
  <HomeLayout>
    <Header />
    <SEO robots={[`noindex`, `nofollow`]} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </HomeLayout>
)

export default NotFoundPage
