import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";

const validationSchema = Yup.object().shape({
    amount: Yup.string().required('Required'),
    delai: Yup.string().required('Required'),
    prev_amount: Yup.string().required('Required'),
    turnover: Yup.string().required('Required'),
});

const customStyles = {
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? '1px solid #ed8b8b' : '1px solid #ed8b8b',
        fontSize: '16px',
        boxShadow: state.isFocused ? '0 0 1px #ed8b8b' : 'none',
        width: "250px",
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


export default function Step3({ setFormValues, prevValues }) {
    const formik = useFormik({
    initialValues: prevValues,
    validationSchema,
    onSubmit: (values) => {
        setFormValues({ ...values, step: 4 });
        },
    });

    return (
        <Components.StyledForm onSubmit={formik.handleSubmit}>
        <Components.StyledTitle>Informations sur le Financement</Components.StyledTitle>
        <Components.StyledLabel htmlFor="amount">Quel est votre besoin de financement?</Components.StyledLabel>
        <Components.StyledInput
            name="amount"
            type="number"
            placeholder="Quel montant cherchez-vous ?"
            onChange={formik.handleChange}
            value={formik.values.amount}
        />
        <Components.StyledLabel htmlFor="delai">Dans quel délai souhaitez vous recevoir cet somme?</Components.StyledLabel>
        <Components.StyledInput
            name="delai"
            type="text"
            placeholder="Dans quel délai souhaitez-vous avoir ce montant"
            onChange={formik.handleChange}
            value={formik.values.delai}
        />
        <Components.StyledLabel htmlFor="prev_amount">Montant léver précedemment</Components.StyledLabel>
        <Components.StyledInput
            name="prev_amount"
            type="number"
            placeholder="Montant léver précedemment"
            onChange={formik.handleChange}
            value={formik.values.prev_amount}
        />
        <Components.StyledLabel htmlFor="turnover">Chiffre d'affaire précedemment</Components.StyledLabel>
        <Components.StyledInput
            name="turnover"
            type="number"
            placeholder="Saisissez votre chiffre d'affaire précédent"
            onChange={formik.handleChange}
            value={formik.values.turnover}
        />
        <Components.ButtonContainer>
            <Components.StyledButtonBack type="button" onClick={() => setFormValues({ ...prevValues, step: prevValues.step - 1 })}>Retour</Components.StyledButtonBack>
            <Components.StyledButtonNext type="submit">Suivant</Components.StyledButtonNext>
        </Components.ButtonContainer>
    </Components.StyledForm>
    );
}