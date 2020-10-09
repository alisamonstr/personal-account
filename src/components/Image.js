import React from 'react'
import styled from 'styled-components/macro'

const StyledImage = styled.div`
  width: 100px;
  height: 100px;
  min-height: 100px;
  background: url(http://placekitten.com/${(p) => 200 + p.id}/${(p) => 200 + p.id}) center center
    no-repeat;
  background-size: cover;
  border-radius: 50px;
  margin-bottom: 10px;
`

export const Image = ({ id }) => {
  return <StyledImage id={id} />
}
