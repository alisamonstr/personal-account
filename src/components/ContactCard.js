import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useMutation, useQueryCache } from 'react-query'
import CloseIcon from '@material-ui/icons/Close'
import { Image } from './Image'
import { Input } from './Input'
import { Button } from './Button'
import { deleteContact, updateContact } from '../utils'

const Content = styled.div`
  width: 100%;
  padding: 30px 20px;
  border-bottom: darkgrey 1px solid;
  &:last-child {
    border-bottom: 0;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
const StyledForm = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`

export const ContactCard = ({ firstName, secondName, phone, email, id }) => {
  const [isActive, setIsActive] = useState(false)
  const initialValuesState = { firstName, secondName, phone, email }

  const [values, setValues] = useState(initialValuesState)
  const cache = useQueryCache()
  const [mutateDelete] = useMutation(deleteContact, {
    onSuccess: () => {
      cache.refetchQueries('contacts')
    },
  })
  const [mutateEdit] = useMutation(updateContact, {
    onSuccess: () => {
      cache.refetchQueries('contacts')
    },
  })
  const contactDelete = (id) => mutateDelete(id)

  const contactEdit = () => {
    const data = { ...values, id: id }
    mutateEdit(data)
    setIsActive(false)
  }

  const onChange = (e) => {
    const newValues = { ...values, [e.target.id]: e.target.value }
    setValues(newValues)
  }

  const cancelChanges = () => {
    setValues(initialValuesState)
    setIsActive(false)
  }

  return (
    <Content>
      <ButtonWrapper>
        <CloseIcon onClick={() => contactDelete(id)} />
      </ButtonWrapper>
      <Wrapper>
        <Image />
        <StyledForm>
          <Input
            id="firstName"
            value={values.firstName}
            label="First name"
            active={isActive}
            onChange={(event) => onChange(event)}
          />
          <Input
            id="secondName"
            value={values.secondName}
            label="Second name"
            active={isActive}
            onChange={(event) => onChange(event)}
          />
          <Input
            id="phone"
            value={values.phone}
            label="Phone"
            active={isActive}
            onChange={(event) => onChange(event)}
          />
          <Input
            id="email"
            value={values.email}
            label="Email"
            active={isActive}
            onChange={(event) => onChange(event)}
          />
        </StyledForm>
      </Wrapper>
      <ButtonWrapper>
        {isActive ? (
          <div>
            <Button onClick={cancelChanges}>Cancel</Button>
            <Button active={isActive} onClick={contactEdit}>
              Save
            </Button>
          </div>
        ) : (
          <Button active={isActive} onClick={() => setIsActive(!isActive)}>
            Edit
          </Button>
        )}
      </ButtonWrapper>
    </Content>
  )
}
