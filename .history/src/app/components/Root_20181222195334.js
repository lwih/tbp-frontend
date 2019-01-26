import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {ThemeProvider} from 'styled-components'
import styledTheme from '../design-system/styled-theme'
import store from '../store'
import history from '../history'

const Wrap = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={styledTheme}>
        fkldfslk
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
)

Wrap.propTypes = {
  // store: PropTypes.object.isRequired, history: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
}

export default Wrap
