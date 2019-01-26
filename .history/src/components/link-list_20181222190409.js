import React from "react"
import {StaticQuery, graphql} from 'gatsby'

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
                        <tr key={index}>
                            <td>{node.frontmatter.title}</td>
                        </tr>
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
          }
        }
      }
    }
  }
`