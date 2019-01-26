import React from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby"

export default function Template({data}) {
    const {markdownRemark: post} = data
    return (
        <div>
            <Helmet title={`${post.frontmatter.title}`}/>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                    __html: post.html
                }}/>
            </div>
        </div>
    )
}

export const pageQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        slug
        title
      }
    }
  }
`