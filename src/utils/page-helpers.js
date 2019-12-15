import _orderBy from 'lodash/orderBy'

export const seoPages = (edges) =>
  edges?.filter((edge) => edge.node.frontmatter.pageType === 'seo')

export const companyPages = (edges) =>
  edges?.filter((edge) => edge.node.frontmatter.pageType === 'company')

export const sortPagesByWeight = (pages, order = 'asc') =>
  _orderBy(pages, ['node.frontmatter.weight'], [order])
