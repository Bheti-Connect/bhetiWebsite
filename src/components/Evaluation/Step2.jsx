import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";
import Select from 'react-select';
import { countriesList } from './formData';
import { optionsActivity, optionsYears } from '../Forms/FormInput'



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




export default function Step2({ setFormValues, prevValues }) {
  const formik = useFormik({
    initialValues: prevValues,
    validationSchema,
    onSubmit: (values) => {
      setFormValues({ ...values, step: 3 });
    },
  });

  const countryOptions = countriesList.map(country => ({ value: country, label: country }));

  return (
    <Components.StyledForm onSubmit={formik.handleSubmit}>
      <Components.StyledTitle>Informations sur l'entreprise</Components.StyledTitle>
      <Components.StyledLabel htmlFor="yearsOfActivity">Nombre d'années d'activité</Components.StyledLabel>
      <Select 
        name="yearsOfActivity"
        options={optionsYears}
        placeholder="Nombre d'années..."
        onChange={option => formik.setFieldValue("yearsOfActivity", option.value)}
        value = {optionsYears.find(option => option.value === formik.values.yearsOfActivity)}
        styles={customStyles}
      />
      <Components.StyledLabel htmlFor="fullName">Brève description</Components.StyledLabel>
      <Components.StyledTextArea
        name="description"
        onChange={formik.handleChange}
        placeholder='Décrivez votre entreprise en quelques mots...'
        value={formik.values.description}
      />
      <Components.StyledLabel htmlFor="country">Pays d'activité</Components.StyledLabel>
      <Select
        id="country"
        name="country"
        options={countryOptions}
        styles={customStyles}
        onChange={option => formik.setFieldValue("country", option.value)}
        value={countryOptions.find(option => option.value === formik.values.country)}
        placeholder="Choisir votre pays..." 
      />
      <Components.StyledLabel htmlFor="sector">Secteur d'activité</Components.StyledLabel>
      <Select 
        name="sector"
        options={optionsActivity}
        placeholder="Secteur d'activité..."
        onChange={option => formik.setFieldValue("sector", option.value)}
        value={ optionsActivity.find(option => option.value === formik.values.sector) }
        styles={customStyles}
      />
        
      <Components.ButtonContainer>
        <Components.StyledButtonBack type="button" onClick={() => setFormValues({ ...prevValues, step: prevValues.step - 1 })}>Retour</Components.StyledButtonBack>
        <Components.StyledButtonNext type="submit">Suivant</Components.StyledButtonNext>
      </Components.ButtonContainer>
    </Components.StyledForm>
  );
}