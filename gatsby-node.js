const path = require("path")

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const ContentPageTemplate = path.resolve(`src/pages/content-template-page.js`)
    const CompanyContentPageTemplate = path.resolve(`src/pages/company-content-template-page.js`)

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___weight] }
      ) {
        edges {
          node {
            frontmatter {
                path
                language
                pageType
                weight
                appData
            }
          }
        }
      }
    }
  `).then(result => {

        if (result.errors) {
            return Promise.reject(result.errors)
        }

        result
            .data
            .allMarkdownRemark
            .edges
            .filter(edge => edge.node.frontmatter.pageType === 'seo')
            .forEach(({node}) => {
                createPage({
                    path: `${node.frontmatter.path}`,
                    component: ContentPageTemplate,
                    context: {
                        locale: 'de',
                        appData: {
                            search: JSON.parse(node.frontmatter.appData)
                        }
                    }
                })
            })
        result
            .data
            .allMarkdownRemark
            .edges
            .filter(edge => edge.node.frontmatter.pageType === 'company')
            .forEach(({node}) => {
                createPage({
                    path: `${node.frontmatter.path}`,
                    component: CompanyContentPageTemplate,
                    context: {
                        locale: 'de'
                    }
                })
            })
    })
}