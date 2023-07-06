import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Select from 'react-select';
import styled from 'styled-components';

// Styled-components
const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    `;

    const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 360px;
    gap: 10px;
    `;

    const StyledField = styled(Field)`
    font-size: 16px;
    padding: 18px;
    border: 1px solid #ccc;
    `;

    const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    `;

    const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #641c1c;
    color: #fff;
    /* margin: 0 auto; */
    width: 30%;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #7a2323;
    }
    `;

const Paragraf = styled.label`
    font-size: 14px !important;
    margin: 10px 0;
    color: #909497;
`
const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 17.5px !important;
    margin: 2px 0;
`
    const StyledSelect = styled(Select)`
    font-size: 16px;
    margin: 7px 0 20px;
    height: 24px;
    background: #E59866;
    `;

const RequiredStar = styled.span`
    color: red;
`

    // Custom Field component for react-select
    const CustomSelect = ({ options, field, form }) => {
    const handleChange = value => {
        // this is going to call setFieldValue and manually update values
        form.setFieldValue(field.name, value);
    };
    const customStyles = {
        control: (base, state) => ({
            ...base,
            fontSize: '16px',
            marginBottom: "15px",

            "@media all and (max-width: 440px)":{
            width: "300px",
            marginBottom: "14px"
        },
            '&:hover': {
                border: state.isFocused ? '1px solid #ed8b8b' : '1px solid #ed8b8b'
            }
            }),
            option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#efdcdc' : 'white'
            }),
            // You can add more styles here...
        };
    return <StyledSelect options={options} onChange={handleChange} styles={customStyles} />;
    };

    const InputForm = () => {
    const projectOptions = [
        { value: 'project1', label: 'Projet 1' },
        { value: 'project2', label: 'Projet 2' },
        { value: 'project3', label: 'Projet 3' },
        // add more projects here
    ];

    return (
        <Formik
        initialValues={{ fullName: '', email: '', project: '', companyName: '', other: '' }}
        onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
        }}
        >
        {({ isSubmitting, setFieldValue }) => (
            <FormWrapper>
            <StyledForm>
            <Label>Nom<RequiredStar>*</RequiredStar></Label>
            <StyledField type="text" name="fullName" placeholder="Votre nom" />
            <StyledErrorMessage name="fullName" component="div" />
            <Label>Email<RequiredStar>*</RequiredStar></Label>
            <StyledField type="email" name="email" placeholder="Email" />
            <StyledErrorMessage name="email" component="div" />
            <Label>Opportunité d'investissement<RequiredStar>*</RequiredStar></Label>
            <Field name="project" component={CustomSelect} placeholder="Seléctionner un projet" options={projectOptions} />
            <StyledErrorMessage name="project" component="div" />
            <Label>Société d'investissement<RequiredStar>*</RequiredStar></Label>
            <Paragraf>Veuillez indiquer si vous êtes un business angel ou mettez le nom de la société d'investissement pour laquelle vous travaillez 👇🏾</Paragraf>
            <StyledField type="text" name="companyName" placeholder="Société d'investissement" />
            <StyledErrorMessage name="companyName" component="div" />
            <Label>Autre</Label>
            <StyledField as="textarea" name="other" placeholder="Avez-vous autre chose a dire ?" />
            <StyledErrorMessage name="other" component="div" />
            
            <Button type="submit" disabled={isSubmitting}>Envoyer</Button>
            </StyledForm>
            </FormWrapper>
        )}
        </Formik>
    );
};

export default InputForm;
