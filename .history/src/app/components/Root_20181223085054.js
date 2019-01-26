import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {ThemeProvider} from 'styled-components'
import styledTheme from '../design-system/styled-theme'
import store from '../store'
import history from '../history'

const Root = (props) => {
  const Component = props.children
  debugger
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Component/>
        </div>

      </ConnectedRouter>
    </Provider>
  )

}

Root.propTypes = {
  // store: PropTypes.object.isRequired, history: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
}

export default Root
