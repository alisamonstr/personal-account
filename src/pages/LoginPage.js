import React, { useContext, useState } from 'react'
import styled from 'styled-components/macro'
import Container from '@material-ui/core/Container'
import { Button, Input } from '../components'
import { useMutation, useQueryCache } from 'react-query'
import { addNewContact, fetchLogin } from '../utils'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid gold;
  border-radius: 15px;
  padding-bottom: 40px;
  margin: 50px auto;
  overflow: hidden;
  width: 50%;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid gold;
  background: gold;
  padding: 15px;
  width: 100%;
  font-size: 20px;
`
const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`
const StyledInput = styled(Input)`
  margin-bottom: 20px;
  width: 200px;
`
const Error = styled.div`
  color: red;
  font-size: 12px;
`
export const LoginPage = () => {
  const [values, setValues] = useState({ login: '', password: '' })
  const { login, error } = useContext(AuthContext)

  const onChange = (e) => {
    const newValues = { ...values, [e.target.id]: e.target.value }
    setValues(newValues)
  }

  const handleLogin = () => login(values)

  return (
    <Container>
      <Content>
        <Header>Login</Header>
        <StyledForm>
          <StyledInput
            id="login"
            value={values.login}
            label="Login"
            active
            onChange={(event) => onChange(event)}
          />
          <StyledInput
            id="password"
            value={values.password}
            active
            label="Password"
            onChange={(event) => onChange(event)}
          />
        </StyledForm>
        <Button active onClick={handleLogin}>
          Login
        </Button>
        <Error> {error}</Error>
      </Content>
    </Container>
  )
}
