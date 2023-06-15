// import styled-components
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";


const validationSchema = Yup.object().shape({
        companyName: Yup.string().required('Required'),
        nom: Yup.string().required('Required'),
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
        validationSchema: Yup.object({
            companyName: Yup.string()
                .max(50, 'Doit comporter 50 caractères ou moins')
                .required('Requis'),
            nom: Yup.string()
                .max(50, 'Ce champs comporter 50 caractères ou moins')
                .required('Requis'),
            email: Yup.string().email('Adresse électronique invalide').required('Requis'),
            
        })
    });

    return (
        <Components.StyledForm onSubmit={formik.handleSubmit} autocomplete="off">
        <Components.StyledTitle>Informations sur l'entreprise</Components.StyledTitle>
        <Components.StyledLabel htmlFor="companyName">Entreprise<span className='required'> *</span> </Components.StyledLabel>
        <Components.StyledInput
            name="companyName"
            placeholder="Nom de l'entreprise"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
        />
        <div className='error'>
            {formik.errors.companyName && formik.touched.companyName && formik.errors.companyName}
        </div>
        <Components.StyledLabel htmlFor="nom">Nom complet<span className='required'> *</span> </Components.StyledLabel>
        <Components.StyledInput
            name="nom"
            placeholder="Votre nom complet"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nom}
        />
        <div className='error'>
            {formik.errors.nom && formik.touched.nom && formik.errors.nom}
        </div>
        <Components.StyledLabel htmlFor="email">Adresse Email<span className='required'> *</span> </Components.StyledLabel>
        <Components.StyledInput
            name="email"
            type="email"
            placeholder="Votre email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
        />
        <div className='error'>
            {formik.errors.email && formik.touched.email && formik.errors.email}
        </div>
        <Components.StyledButtonNext type="submit">Suivant</Components.StyledButtonNext>
        </Components.StyledForm>
    );

}


