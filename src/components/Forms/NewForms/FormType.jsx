import React from "react";
import logo from "../NewForms/formAssets/logo.svg";
import styled from "styled-components";
import "../NewForms/forms.css";
import background from "../NewForms/formAssets/background.svg"


const FormType = ({ formHeading, formSecondHeading, formThirdHeading }) => {
  return (
      <FormWrapper>
        <img className="logo-img" src={logo} alt="logo" />
        <p className="form-heading">{formHeading}</p>
        <p className={`form-secondary-details ${formSecondHeading == null ? 'none' : 'block'}`}>{formSecondHeading}</p>
        <p className={`form-secondary-details ${formThirdHeading == null ? 'none' : 'block'}`}>{formThirdHeading}</p>
      </FormWrapper>
  );
};

export const FormOuterWrapper = styled.div`
  background: url(${background});
  min-height: 100vh;
  padding: 3em 0;
  background-size:cover;
  background-position: top;

  @media only screen and (max-width:850px){
  background-size:contain;
  }
`;

const FormWrapper = styled.div`
  background-color: #641c1c;
  border-top-left-radius: 0.425em;
  border-bottom-left-radius: 0.425em;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media only screen and (max-width:850px){
    border-top-right-radius: 0.425em;
    border-bottom-left-radius: 0;
  }

  .form-heading,
  .form-secondary-details {
    color: #fff;
    font-family: "Roboto Slab", serif;
    font-weight: 400;
    padding: 1em 2em;
    text-align: center;
    font-size: 1.25rem;
  }

  @media only screen and (max-width:500px){
    .form-heading{
      font-size:1.1rem;
    }
  }

  .form-secondary-details {
    font-weight: 300;
    font-size: 0.9rem;
  }

  .none{
    display:none;
  }

  .block{
    display:block;
  }
`;

export default FormType;
