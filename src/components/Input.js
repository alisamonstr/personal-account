import React from 'react'
import styled from 'styled-components/macro'
import { TextField, InputBase } from '@material-ui/core'

const StyledInput = styled(TextField)`
  margin-right: 20px;
  margin-bottom: 10px;
`
const StyledLabel = styled.div`
  font-size: 12px;
`
const StyledInputBase = styled(InputBase)`
  margin-right: 20px;
  margin-bottom: 10px;
  &.Mui-disabled {
    color: black;
  }
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
      {...props}
    />
  )
}
