const path = require("path")
import {routeWithLanguage} from './src/utils/routeHelper'

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions

  const ContentPageTemplate = path.resolve(`src/templates/content-template.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
                path
                language
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const a = routeWithLanguage(node.frontmatter.language, frontmatter.path)
    debugger

    result
      .data
      .allMarkdownRemark
      .edges
      .forEach(({node}) => {
        createPage({
          path: routeWithLanguage(node.frontmatter.language, frontmatter.path),
          component: ContentPageTemplate,
          context: {}
        })
      })
  })
}