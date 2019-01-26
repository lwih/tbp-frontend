import React from "react"
import {StaticQuery, graphql, Link} from 'gatsby'
import {routeWithLanguage} from '../utils/routeHelper'

export default({data}) => {
  return (<StaticQuery
    query={query}
    render={data => (
    <React.Fragment>
      <div>
        {data
          .allMarkdownRemark
          .edges
          .map(({
            node
          }, index) => (
            <Link
              key={node.frontmatter.path + index}
              to={routeWithLanguage(node.frontmatter.language, node.frontmatter.path)}>{node.frontmatter.title}</Link>
          ))}
      </div>
    </React.Fragment>
  )}/>)
}

export const query = graphql `
  query {
    allMarkdownRemark {
      edges {
        node{
          frontmatter {
            title
            path
            language
          }
        }
      }
    }
  }
`