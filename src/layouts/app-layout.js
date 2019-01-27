import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

import './layout.css'

const AppLayout = ({children}) => (<StaticQuery
    query={graphql `query B { site { siteMetadata { title } } }`}
    render={data => (
    <React.Fragment>
        <div>
            {children}
        </div>
    </React.Fragment>
)}/>)

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout
