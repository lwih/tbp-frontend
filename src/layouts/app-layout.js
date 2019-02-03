import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Footer from '../components/footer';

import './layout.css'
import LinkList from '../components/link-list';

const AppLayout = ({children}) => (
    <StaticQuery
        query={graphql `query B { site { siteMetadata { title } } }`}
        render={data => (
        <React.Fragment>
            <div>
                {children}
            </div>
            <LinkList/>
            <Footer/>
        </React.Fragment>
    )}/>
)

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout
