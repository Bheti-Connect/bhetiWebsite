// define your styled components
import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-bottom: 150px;
    margin-top: 50px;
    .error{
        color: #900D09;
        font-size: 0.8em;
    }
    .required{
        color: #900D09;
    }
    `;

export const StyledSpan = styled.span`
    position: relative;
    input{
        padding-left: 24px;
    }
    &:before {
        position: absolute;
        top: 18px;
        content:"$";
        left: 10px;
    }
`

export const StyledInput = styled.input`
    margin: 10px 0;
    padding: 10px;
    width: 350px;
    border-radius: 18px;
    @media all and (max-width: 440px){
        width: 300px;
    }
    direction: ltr;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &::before {
    content: attr(value) ',';
    visibility: visible;
    display: block;
    direction: rtl;
  }
/* 
  &::placeholder {
    color: transparent;
  } */

  &:focus::before {
    visibility: hidden;
  }
    `;

export const StyledTitle = styled.h1`
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
        margin-bottom: 40px;
        @media all and (max-width: 440px){
            font-size: 1.35rem;
        }
    `
export const StyledLabel = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    float: left;
    @media all and (max-width: 440px){
        font-size: 1.19rem;
        margin-bottom: 7px;
    }
`

export const StyledTextArea = styled.textarea`
    margin: 10px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    padding: 20px 10px;
    width: 350px;
    border-radius: 18px;
    @media all and (max-width: 440px){
        width: 300px;
    }
`

export const StyledSelect = styled.select`
    font-family: 'Montserrat', sans-serif;
    margin: 10px 0;
    padding: 10px;
    width: 200px;
    
    `;

export const StyledButtonNext = styled.button`
    font-family: 'Montserrat', sans-serif;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #871211;
    border: none;
    color: white;
    border-radius: 23px;
    cursor: pointer;
    &:hover {
        background-color: #660d0d;
    }
    `;
export const StyledButtonSend = styled.button`
    font-family: 'Montserrat', sans-serif;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #1E8449;
    border: none;
    color: white;
    border-radius: 23px;
    cursor: pointer;
    &:hover {
        background-color: #196F3D;
    }
    `;

export const StyledButtonBack = styled.button`
    font-family: 'Montserrat', sans-serif;
    margin-top: 20px;
    border-radius: 23px;
    padding: 10px 20px;
    background-color: #797D7F;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #56595B;
    }
    `;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;

`


