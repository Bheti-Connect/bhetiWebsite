import React from 'react'
import styled from 'styled-components'

const StepIndicator = ({id,className}) => {
  return (
    <StepNum id={id} className={className}></StepNum>
  )
}

const StepNum = styled.span`
min-width:0.9rem;
min-height:0.9rem;
border-radius:50%;
background-color:#E5E5E5;
display:inline-block;
margin-right:1rem;
`

export default StepIndicator;