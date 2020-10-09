import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core'
import { useMutation, useQueryCache } from 'react-query'
import { Button } from './Button'
import { Input } from './Input'
import { addNewContact } from '../utils'

export const AddContactModal = ({ isModalOpen, handleIsModalOpen }) => {
  const [values, setValues] = useState({ firstName: '', secondName: '', phone: '', email: '' })
  const cache = useQueryCache()
  const [mutate] = useMutation(addNewContact, {
    onSuccess: () => {
      cache.refetchQueries('contacts')
    },
  })

  const onChange = (e) => {
    const newValues = { ...values, [e.target.id]: e.target.value }
    setValues(newValues)
  }

  const addContact = () => {
    mutate(values)
    handleIsModalOpen()
  }

  return (
    <Dialog open={isModalOpen} onClose={handleIsModalOpen}>
      <DialogTitle>Add new contact</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Input
            id="firstName"
            value={values.firstName}
            label="First name"
            active
            onChange={(event) => onChange(event)}
          />
          <Input
            id="secondName"
            value={values.secondName}
            label="Second name"
            active
            onChange={(event) => onChange(event)}
          />
          <Input
            id="phone"
            value={values.phone}
            label="Phone"
            active
            onChange={(event) => onChange(event)}
          />
          <Input
            id="email"
            value={values.email}
            label="Email"
            active
            onChange={(event) => onChange(event)}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={addContact} active>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}
