import React, { useContext } from 'react'
import './App.css'
import { ContactsPage, LoginPage } from './pages'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { AuthContext } from './contexts'

function App() {
  const { isAuthenticated } = useContext(AuthContext)
  // console.log(isAuthenticated)

  return (
    <Router>
      <div>
        <Switch>
          {isAuthenticated && <Route path="/contactlist" component={ContactsPage} />}
          <Route path="/" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
