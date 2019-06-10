import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import LinkList from '../components/link-list'
import './layout.css'
import Footer from '../components/footer';

const homeLayoutQuery = graphql `
  query {
    site { 
        siteMetadata { 
            title 
        } 
    }
    allMarkdownRemark {
      edges {
        node{
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

const HomeLayout = ({children}) => (
  <StaticQuery
    query={homeLayoutQuery}
    render={data => (
    <React.Fragment>
      <div style={{
        margin: `0 auto`
      }}>
        {children}
      </div>
      <LinkList data={data}/>
      <Footer data={data}/>
    </React.Fragment>
  )}/>
)

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default HomeLayout
