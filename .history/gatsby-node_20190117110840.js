const path = require("path")

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const ContentPageTemplate = path.resolve(`src/templates/content-template.js`)

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
            }
        }
        edges {
          node {
            node_locale
            frontmatter {
                path
                language
            }
          }
        }
      }
    }
  `).then(result => {

        console.log('node locale', result.edges.node_locale)
        debugger
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        result
            .data
            .allMarkdownRemark
            .edges
            .forEach(({node}) => {
                createPage({path: `/${node.frontmatter.language}${node.frontmatter.path}`, component: ContentPageTemplate, context: {}})
            })
    })
}