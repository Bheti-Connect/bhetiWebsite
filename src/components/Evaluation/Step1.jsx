// import styled-components
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";


const validationSchema = Yup.object().shape({
        companyName: Yup.string().required('Required'),
        fullName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    // use your styled components instead of html elements
    export default function Step1({ setFormValues, prevValues }) {
    const formik = useFormik({
        initialValues: prevValues,
        validationSchema,
        onSubmit: (values) => {
        setFormValues({ ...values, step: 2 });
        },
    });

    return (
        <Components.StyledForm onSubmit={formik.handleSubmit}>
        <Components.StyledTitle>Informations sur l'entreprise</Components.StyledTitle>
        <Components.StyledLabel htmlFor="companyName">Entreprise</Components.StyledLabel>
        <Components.StyledInput
            name="companyName"
            placeholder="Nom de l'entreprise"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.companyName}
        />
        <Components.StyledLabel htmlFor="fullName">Nom complet</Components.StyledLabel>
        <Components.StyledInput
            name="fullName"
            placeholder="Votre nom complet"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
        />
        <Components.StyledLabel htmlFor="email">Adresse Email</Components.StyledLabel>
        <Components.StyledInput
            name="email"
            type="email"
            placeholder="Votre email"
            onChange={formik.handleChange}
            value={formik.values.email}
        />
        <Components.StyledButtonNext type="submit">Suivant</Components.StyledButtonNext>
        </Components.StyledForm>
    );

}


