import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";
import Select from 'react-select';
import { countriesList } from './formData';
import { optionsActivity } from '../Forms/FormInput'



const validationSchema = Yup.object().shape({
  yearsOfActivity: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  sector: Yup.string().required('Required'),
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

const countries = ["Afghanistan", "Albania", "Algeria", /* Add rest of the countries here */];

export default function Step2({ setFormValues, prevValues }) {
  const formik = useFormik({
    initialValues: prevValues,
    validationSchema,
    onSubmit: (values) => {
        setFormValues({ ...values, step: 3 });
        },
    });

    const options = [
    { value: '0-2', label: '0 à 2 ans' },
    { value: '2-5', label: '2 à 5 ans' },
    { value: '5+', label: 'Plus de 5 ans' },
    ];

    return (
        <Components.StyledForm onSubmit={formik.handleSubmit}>
        <Components.StyledTitle>Informations sur le Financement</Components.StyledTitle>
        <Components.StyledLabel htmlFor="yearsOfActivity">Montant rechercher en USD</Components.StyledLabel>
        <Components.StyledInput
            name="amount"
            type="number"
            placeholder="Quel montant cherchez-vous ?"
            onChange={formik.handleChange}
            value={formik.values.amount}
        />
        <Components.StyledLabel htmlFor="fullName">Délai de financement</Components.StyledLabel>
        <Components.StyledInput
            name="delai"
            type="text"
            placeholder="Dans quel délai souhaitez-vous avoir ce montant"
            onChange={formik.handleChange}
            value={formik.values.delai}
        />
      <Components.StyledLabel htmlFor="country">Montant léver précedemment</Components.StyledLabel>
      <Components.StyledInput
            name="prev_amount"
            type="number"
            placeholder="Montant léver précedemment"
            onChange={formik.handleChange}
            value={formik.values.prev_amount}
        />
      <Components.StyledLabel htmlFor="sector">Chiffre d'affaire précedemment</Components.StyledLabel>
      <Components.StyledInput
            name="turnover"
            type="number"
            placeholder="Dans quel délai souhaitez-vous avoir ce montant"
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