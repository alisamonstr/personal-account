import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import {
  useQuery,
  useMutation,
  useQueryCache,
  QueryCache,
  ReactQueryCacheProvider,
} from 'react-query'
import { AuthProvider } from './contexts'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
    text: {
      disabled: '#000000',
      secondary: '#000000',
    },
  },
})

const queryCache = new QueryCache()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <CssBaseline />
          <App />
        </ReactQueryCacheProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
