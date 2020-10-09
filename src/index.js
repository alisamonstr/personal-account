import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import { AuthProvider } from './contexts'
import { BrowserRouter as Router } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
  },
})

const queryCache = new QueryCache()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ReactQueryCacheProvider queryCache={queryCache}>
            <CssBaseline />
            <App />
          </ReactQueryCacheProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
