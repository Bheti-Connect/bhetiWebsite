import React from "react";
import { useField } from "formik"; 
import styled from "styled-components";

export const Field = ({ label,otherText, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledParagraph>{otherText}</StyledParagraph>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className="error">{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};


// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
  font-family: "Roboto Slab", serif;
  background: #641C1C;
  color: #fff;
  padding:0.8em;
  display:block;
  border-radius:0.5rem;
  appearance: none;
  border:none;
  margin-bottom: 1.5rem;
  font-size:0.85rem;

  option{
    padding:1em;
  }

`;

const StyledInput = styled.input`
display: block;
background-color: rgba(0, 0, 0, 0.1);
border: none;
padding: 0.7em 1em;
font-family: "Roboto Slab", serif;
font-size: 1rem;
border-radius: 0.5rem;
width: 100%;
margin-bottom: 1.5rem;
`

const StyledErrorMessage = styled.div`
  font-size: 0.9rem;
  font-family: "Roboto Slab", serif;
  color: var(--red-600);
  margin-bottom: 1.5rem;
  &:before {
    content: "❌ ";
    font-size: 0.7rem;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 1.5rem;
  display: block;
  font-family: "Roboto Slab", serif;
  font-weight:500;
`;

const StyledParagraph = styled.p`
  margin-bottom:1rem;
  color: rgba(0, 0, 0, 0.53);
  font-size:0.9rem;
  font-family: "Roboto Slab", serif;

`;

const StyledTextArea = styled.textarea`
display: block;
background-color: rgba(0, 0, 0, 0.1);
border: none;
padding: 0.7em 1em;
font-family: "Roboto Slab", serif;
font-size: 1rem;
border-radius: 0.5rem;
width: 100%;
margin-bottom: 1.5rem;
resize: vertical;
`

export const MySelect = ({ label,otherText, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledParagraph>{otherText}</StyledParagraph>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

export const MyTextArea = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
      <>
          <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
          <StyledTextArea {...field} {...props} />
          {meta.touched && meta.error ? (
              <StyledErrorMessage className="error">{meta.error}</StyledErrorMessage>
          ) : null}
      </>
  );
};

export const FileInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
      <>
          <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
          <StyledFileInput {...field} {...props} />
          {meta.touched && meta.error ? (
              <StyledErrorMessage className="error">{meta.error}</StyledErrorMessage>
          ) : null}
      </>
  );
};

const StyledFileInput = styled.input`
visibility:hidden;
display:none;
`

const FormikFields = () => {
  return (
    <>
    </>
  );
};

export default FormikFields