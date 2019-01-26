import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Wrap from '../app/components/Wrap'
import Results from '../app/components/connected/Results'

import Header from '../components/header'
import './layout.css'

const CMSLayout = ({children}) => (
    <StaticQuery
        query={graphql `query A { site { siteMetadata { title } } }`}
        render={data => (
        <React.Fragment>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <div id="SearchContainer"></div>
            <div>usp</div>
            <div>
                <Wrap>
                    <Results hideLoadMore={false}/>
                </Wrap>
            </div>
            <div
                id="tbp-app-wrapper"
                style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0
            }}>
                {children}
            </div>
            <div>footer</div>
        </React.Fragment>
    )}/>
)

CMSLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default CMSLayout
