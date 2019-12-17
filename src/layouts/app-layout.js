import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import './layout.css'

const appLayoutQuery = graphql`
  query {
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

const AppLayout = ({ children }) => (
  <StaticQuery
    query={appLayoutQuery}
    render={(data) => (
      <React.Fragment>
        <div>{children}</div>
        <Footer data={data} />
      </React.Fragment>
    )}
  />
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
