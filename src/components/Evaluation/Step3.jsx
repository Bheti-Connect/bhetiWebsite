import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";

const validationSchema = Yup.object().shape({
    montant_voulu: Yup.string().required('Le montant est requis'),
    delai_financement: Yup.string().required('Le delai est requis'),
    financement_precedent: Yup.string().required('Le montant précédent est requis'),
    chiffre_precedent: Yup.string().required("Le chiffre d'affaire est requis"),
});

export default function Step3({ setFormValues, prevValues }) {
    const formik = useFormik({
    initialValues: prevValues,
    validationSchema,
    validate: (values) => {
        const errors = {};

        // Validate montant_voulu field
        if (!values.montant_voulu) {
            errors.montant_voulu = 'Amount is required';
            } else if (!/^\d+(\.\d{1,2})?$/.test(values.montant_voulu)) {
            errors.montant_voulu = 'Montant invalide';
            }
    
            return errors;
        },
    onSubmit: (values) => {
        setFormValues({ ...values, step: 4 });
        },
    });

    return (
        <Components.StyledForm onSubmit={formik.handleSubmit} autocomplete="off">
        <Components.StyledTitle>Informations sur le Financement</Components.StyledTitle>
        <Components.StyledLabel htmlFor="montant_voulu">Quel est votre besoin de financement?<span className='required'> *</span></Components.StyledLabel>
        <Components.StyledInput
            name="montant_voulu"
            type="text"
            id="montant_voulu"
            placeholder="0.00$"
            value={formik.values.montant_voulu}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        <div className='error'>
            {formik.errors.montant_voulu && formik.touched.montant_voulu}
        </div>
        <Components.StyledLabel htmlFor="delai_financement">Dans quel délai souhaitez vous recevoir cet somme?<span className='required'> *</span></Components.StyledLabel>
        <Components.StyledInput
            name="delai_financement"
            type="text"
            placeholder="Dans quel délai souhaitez-vous avoir ce montant"
            onChange={formik.handleChange}
            value={formik.values.delai_financement}
        />
        <div className='error'>
            {formik.errors.delai_financement && formik.touched.delai_financement}
        </div>
        <Components.StyledLabel htmlFor="financement_precedent">Montant léver précedemment</Components.StyledLabel>
        <Components.StyledInput
            name="financement_precedent"
            type="number"
            placeholder="Montant léver précedemment"
            onChange={formik.handleChange}
            value={formik.values.financement_precedent}
        />
        <div className='error'>
            {formik.errors.financement_precedent && formik.touched.financement_precedent}
        </div>
        <Components.StyledLabel htmlFor="turnover">Chiffre d'affaire<span className='required'> *</span></Components.StyledLabel>
        <Components.StyledInput
            name="chiffre_precedent"
            type="number"
            placeholder="Saisissez votre chiffre d'affaire précédent"
            onChange={formik.handleChange}
            value={formik.values.chiffre_precedent}
        />
        <div className='error'>
            {formik.errors.chiffre_precedent && formik.touched.chiffre_precedent}
        </div>
        <Components.ButtonContainer>
            <Components.StyledButtonBack type="button" onClick={() => setFormValues({ ...prevValues, step: prevValues.step - 1 })}>Retour</Components.StyledButtonBack>
            <Components.StyledButtonNext type="submit">Suivant</Components.StyledButtonNext>
        </Components.ButtonContainer>
    </Components.StyledForm>
    );
}