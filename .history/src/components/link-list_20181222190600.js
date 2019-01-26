import React from "react"
import {StaticQuery, graphql, Link} from 'gatsby'

export default({data}) => {
    console.log(data)
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
                        <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
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
            slug
          }
        }
      }
    }
  }
`