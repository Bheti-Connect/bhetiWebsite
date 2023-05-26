import React from 'react'
import './ErrorPage.css'
import styled from 'styled-components';
import error from '../../assets/images/404.png';
import { NavLink } from 'react-router-dom';


const ErrorPage = () => {
    return (
           <ErrorDiv>
                <ErrorP>
                    <p>Cette page n'existe pas. Cliquez ==> <span> <NavLink to='/'>ici</NavLink></span></p>
                </ErrorP>
            </ErrorDiv>
    )
}

const ErrorP = styled.div`
  display: flex;
  align-items: start;
  align-self: center;
  justify-content: center;
  background-image: url(${error});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;



  p{
    margin-top: 2rem;
   color: black;
   font-size: 2rem;
   
   span {
      color: #540000;
   }
  }
`;

const ErrorDiv = styled.div`
   height: 80vh;
   width: 80vw;
   margin: auto;
`;


export default ErrorPage;