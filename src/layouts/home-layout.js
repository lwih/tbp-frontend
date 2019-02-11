import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Header from '../components/header'
import LinkList from '../components/link-list'
import './layout.css'
import Footer from '../components/footer';
import Search from '../app/components/search';

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
            <div
                style={{
                margin: `0 auto`,
                maxWidth: 960
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
