import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

const SEO = ({
    description,
    lang,
    meta,
    keywords,
    title,
    robots
}) => {
    return (
        <StaticQuery
            query={seoQuery}
            render={data => {
            const metaDescription = description || data.site.siteMetadata.description;
            return (<Helmet
                htmlAttributes={{
                lang
            }}
                title={data.site.siteMetadata.title}
                titleTemplate={`%s | ${title}`}
                meta={[
                {
                    name: `robots`,
                    content: robots.join(', ')
                }, {
                    name: `description`,
                    content: metaDescription
                }, {
                    property: `og:title`,
                    content: title
                }, {
                    property: `og:description`,
                    content: metaDescription
                }, {
                    property: `og:type`,
                    content: `website`
                }, {
                    name: `twitter:card`,
                    content: `summary`
                }, {
                    name: `twitter:creator`,
                    content: data.site.siteMetadata.author
                }, {
                    name: `twitter:title`,
                    content: title
                }, {
                    name: `twitter:description`,
                    content: metaDescription
                }, {
                    name: 'HandheldFriendly',
                    content: 'true'
                }, {
                    name: 'verification',
                    content: '195279505d396483f8954cae2063f63d'
                }
            ].concat(keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `)
                }
                : []).concat(meta)}/>)
        }}/>
    )
}

SEO.defaultProps = {
    lang: `de`,
    meta: [],
    keywords: [],
    robots: [
        'index', 'follow'
    ],
    title: 'The Better Play'
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    robots: PropTypes.arrayOf(PropTypes.string),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired
}

export default SEO

const seoQuery = graphql `
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
