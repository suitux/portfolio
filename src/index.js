import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { PortfolioPage } from "./pages/Portfolio";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <PortfolioPage />
      </Provider>
    </React.Fragment>
  </MuiThemeProvider>,
  document.getElementById('app')
)
