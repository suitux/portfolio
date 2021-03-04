import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { PortfolioPage } from './pages/Portfolio'
import firebase from 'firebase/app'
import 'firebase/analytics'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBT5UWSOraUWmb5cQZS6e53wckm18iYduw',
  authDomain: 'portfolio-1539542541675.firebaseapp.com',
  databaseURL: 'https://portfolio-1539542541675.firebaseio.com',
  projectId: 'portfolio-1539542541675',
  storageBucket: 'portfolio-1539542541675.appspot.com',
  messagingSenderId: '231004710803',
  appId: '1:231004710803:web:c7543653ff0af673886a66',
  measurementId: 'G-38KHKC79GV'
})
firebase.analytics()

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <PortfolioPage />
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.Fragment>
  </MuiThemeProvider>,
  document.getElementById('app')
)
