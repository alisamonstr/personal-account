import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ContactsPage, LoginPage } from './pages'
import { AuthContext } from './contexts'

function App() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Switch>
      {isAuthenticated && <Route path="/contactlist" component={ContactsPage} />}
      {!isAuthenticated && <Route path="/" component={LoginPage} />}
      <Redirect to={isAuthenticated ? '/contactlist' : '/'} />
    </Switch>
  )
}

export default App
