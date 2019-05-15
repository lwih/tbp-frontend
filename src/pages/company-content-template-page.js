import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, navigate } from 'gatsby'
import CompanyContentLayout from '../layouts/company-content-layout'
import Header, { HeaderTitle } from '../components/header'
import Search from '../app/search'
import AppContainer from '../components/app-container'
import { Box, Flex } from '@rebass/grid'
import Results from '../app/Results'
import SEO from '../components/seo'
import Footer from '../components/footer'
import _get from 'lodash/get'
import WidthContainer from '../components/width-container'
import CookieBannerBar from '../components/cookie-banner-bar'

export default function Template(props) {
  const { markdownRemark: post } = props.data
  return (
    <CompanyContentLayout>
      <SEO title={_get(post, 'frontmatter.title')} />
      <Header />
      <WidthContainer>
        <Flex justifyContent="center" flexDirection="column">
          <Box
            width={1}
            py={4}
            alignSelf="center"
            style={{
              textAlign: 'center',
            }}
          >
            <h1>{_get(post, 'frontmatter.title')}</h1>
          </Box>
          <Box width={1} py={2} px={3}>
            <div
              dangerouslySetInnerHTML={{
                __html: _get(post, 'html'),
              }}
            />
          </Box>
        </Flex>
      </WidthContainer>

      <CookieBannerBar />
    </CompanyContentLayout>
  )
}

export const pageQuery = graphql`
  query CompanyPages($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        appData
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            language
            weight
            pageType
          }
        }
      }
    }
  }
`
