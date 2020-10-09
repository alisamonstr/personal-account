import React, { memo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { useMutation } from 'react-query'
import { fetchLogin } from '../utils'

const AuthContext = React.createContext({})

const AuthProvider = memo(({ children }) => {
  // this value should store auth token instead
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('auth', false)
  const [error, setError] = useState('')

  let history = useHistory()

  const [login] = useMutation(fetchLogin, {
    onMutate: () => {
      setError('')
    },
    onSuccess: (data) => {
      if (data.length) {
        setIsAuthenticated(true)
        history.push('/contactlist')
      } else {
        setError('Login or password is wrong')
      }
    },
    onError: () => {
      setError('Server Error')
    },
  })

  const logOut = (data) => {
    setIsAuthenticated(false)
  }
  return (
    <AuthContext.Provider value={{ login, logOut, isAuthenticated, error }}>
      {children}
    </AuthContext.Provider>
  )
})

export { AuthContext, AuthProvider }
