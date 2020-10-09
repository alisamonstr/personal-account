import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${(p) => (p.active ? 'pink' : 'gold')};
  border-radius: 25px;
  border: 0;
  padding: 10px 20px;
  font-size: 14px;
  min-width: 120px;
  font-weight: 500;
  margin-left: 10px;
  max-height: 38px;
  cursor: pointer;
  outline: none;
`

export const Button = ({ active, onClick, children, className }) => {
  return (
    <StyledButton active={active} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  )
}
