import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import LinkList from '../components/link-list'
import Footer from '../components/footer'
import './layout.css'

const contentQuery = graphql`
  query ContentLayoutQuery {
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

const ContentLayout = (props) => {
  return (
    <StaticQuery
      query={contentQuery}
      render={(data) => {
        return (
          <React.Fragment>
            <div
              style={{
                margin: `0 auto`,
              }}
            >
              {props.children}
            </div>
            <LinkList data={data} />
            <Footer data={data} />
          </React.Fragment>
        )
      }}
    />
  )
}

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentLayout
