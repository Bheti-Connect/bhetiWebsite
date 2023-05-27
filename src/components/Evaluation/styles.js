// define your styled components
import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-bottom: 50px;
    `;

export const StyledInput = styled.input`
    margin: 10px 0;
    padding: 10px;
    width: 200px;
    `;

    export const StyledTitle = styled.h1`
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
    
        
    `

export const StyledSelect = styled.select`
    margin: 10px 0;
    padding: 10px;
    width: 200px;
    `;

export const StyledButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #871211;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #660d0d;
    }
    `;