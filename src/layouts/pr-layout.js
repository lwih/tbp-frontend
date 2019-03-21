import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Header from '../components/header'
import LinkList from '../components/link-list'
import './layout.css'
import Footer from '../components/footer';
import Search from '../app/search';
import {colors} from '../design-system/theme';

const prLayoutQuery = graphql `
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

const PRLayout = ({children}) => (
  <StaticQuery
    query={prLayoutQuery}
    render={data => (
    <React.Fragment>
      <div
        style={{
        margin: `0 auto`,
        background: colors.white
      }}>
        {children}
      </div>
      <LinkList data={data}/>
      <Footer data={data}/>
    </React.Fragment>
  )}/>
)

PRLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default PRLayout
