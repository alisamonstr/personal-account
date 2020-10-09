import React from 'react'
import styled from 'styled-components/macro'

const StyledImage = styled.div`
  width: 100px;
  height: 100px;
  min-height: 100px;
  background: url(https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/cat-landing-hero-sm.jpg?bust=1536935166)
    center center no-repeat;
  background-size: cover;
  border-radius: 50px;
  margin-bottom: 10px;
`

export const Image = () => {
  return <StyledImage />
}
