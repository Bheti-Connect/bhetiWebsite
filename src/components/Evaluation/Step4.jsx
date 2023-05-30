import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";
import Select from 'react-select';




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

  const options = [
    { value: 'Oui', label: 'Oui' },
    { value: 'Non', label: 'Non' },
  ];

  return (
    <Components.StyledForm onSubmit={formik.handleSubmit}>
      <Components.StyledTitle>Informations sur le Financement</Components.StyledTitle>
      <Components.StyledLabel htmlFor="yearsOfActivity">Montant rechercher</Components.StyledLabel>
      <Select 
        name="yearsOfActivity"
        options={options}
        placeholder="Nombre d'années..."
        onChange={option => formik.setFieldValue("yearsOfActivity", option.value)}
        value = {options.find(option => option.value === formik.values.options)}
        styles={customStyles}
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
            type="text"
            placeholder="Montant léver précedemment"
            onChange={formik.handleChange}
            value={formik.values.prev_amount}
        />
      <Components.StyledLabel htmlFor="sector">Chiffre d'affaire précedemment</Components.StyledLabel>
      <Components.StyledInput
            name="delai"
            type="text"
            placeholder="Dans quel délai souhaitez-vous avoir ce montant"
            onChange={formik.handleChange}
            value={formik.values.delai}
        />
      <Components.ButtonContainer>
        <Components.StyledButtonBack type="button" onClick={() => setFormValues({ ...prevValues, step: prevValues.step - 1 })}>Retour</Components.StyledButtonBack>
        <Components.StyledButtonNext type="submit">Suivant</Components.StyledButtonNext>
      </Components.ButtonContainer>
    </Components.StyledForm>
  );
}