import React from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby"
import CMSLayout from '../layouts/cms-layout'

export default function Template({data}) {
    debugger
    const {markdownRemark: post} = data
    return (
        <CMSLayout>
            <Helmet title={`${post.frontmatter.title}`}/>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                    __html: post.html
                }}/>
            </div>
        </CMSLayout>
    )
}

export const pageQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: "de" . $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`