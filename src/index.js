import React from 'react'
import ReactDOM from 'react-dom'
import Portfolio from './components/portfolio'
import { Provider } from 'react-redux'
import store from './redux/store'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <div>PORTFOLIO</div>
      </Provider>
    </React.Fragment>
  </MuiThemeProvider>,
  document.getElementById('app')
)
