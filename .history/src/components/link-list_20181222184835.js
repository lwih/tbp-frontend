import React from "react"
import {StaticQuery, graphql} from 'gatsby'

export default({data}) => {
    console.log(data)
    return (<StaticQuery
        query={query}
        render={data => (
        <React.Fragment>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data
                            .allFile
                            .edges
                            .map(({
                                node
                            }, index) => (
                                <tr key={index}>
                                    <td>{node.relativePath}</td>
                                    <td>{node.prettySize}</td>
                                    <td>{node.extension}</td>
                                    <td>{node.birthTime}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )}/>)
}

export const query = graphql `
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`