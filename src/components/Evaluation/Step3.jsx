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
        if (!values.chiffre_precedent) {
                errors.chiffre_precedent = 'Amount is required';
                } else if (!/^\d+(\.\d{1,2})?$/.test(values.chiffre_precedent)) {
                errors.chiffre_precedent = 'Montant invalide';
            }
        
        if (!values.financement_precedent) {
                    errors.financement_precedent = 'Amount is required';
                    } else if (!/^\d+(\.\d{1,2})?$/.test(values.financement_precedent)) {
                    errors.financement_precedent = 'Montant invalide';
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
            type="number"
            id="montant_voulu"
            placeholder="0.00$"
            value={formik.values.montant_voulu}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        <div className='error'>
            {formik.errors.montant_voulu && formik.touched.montant_voulu}
        </div>
        <Components.StyledLabel htmlFor="delai_financement">Dans combien des mois souhaitez-vous obtenir cet somme?<span className='required'> *</span></Components.StyledLabel>
        <Components.StyledInput
            name="delai_financement"
            type='number'
            id="delai_financement"
            placeholder="0"
            value={formik.values.delai_financement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        <div className='error'>
            {formik.errors.delai_financement && formik.touched.delai_financement}
        </div>
        <Components.StyledLabel htmlFor="financement_precedent">Montant léver précedemment</Components.StyledLabel>
        <Components.StyledInput
            name="financement_precedent"
            type="number"
            id="financement_precedent"
            placeholder="0.00$"
            value={formik.values.financement_precedent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        <div className='error'>
            {formik.errors.financement_precedent && formik.touched.financement_precedent}
        </div>
        <Components.StyledLabel htmlFor="turnover">Chiffre d'affaire<span className='required'> *</span></Components.StyledLabel>
        <Components.StyledInput
            name="chiffre_precedent"
            type="text"
            id="chiffre_precedent"
            placeholder="0.00$"
            value={formik.values.chiffre_precedent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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