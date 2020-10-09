import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import InputBase from '@material-ui/core/InputBase'

const StyledInput = styled(TextField)`
  margin-right: 20px;
  width: 300px;
`
const StyledLabel = styled.div`
  font-size: 12px;
`
const StyledInputBase = styled(InputBase)`
  margin-right: 20px;
  margin-bottom: 10px;
`

export const Input = ({ id, value, label, active, onChange, ...props }) => {
  if (!active) {
    return (
      <div className={props.className}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInputBase defaultValue={value} disabled />
      </div>
    )
  }
  return (
    <StyledInput
      className={props.className}
      id={id}
      label={label}
      defaultValue={value}
      onChange={onChange}
      // variant={variant}
      {...props}
    />
  )
}
