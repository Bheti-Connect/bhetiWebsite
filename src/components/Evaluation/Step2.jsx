import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";
import Select from 'react-select';
import { countriesList } from './formData';
import { optionsActivity, optionsYears } from '../Forms/FormInput'



const validationSchema = Yup.object().shape({
  annees_activite: Yup.string().required("Le nombre d'année est requis"),
  description: Yup.string().required('La description est requise'),
  equipe: Yup.string().required('Le nombre de personne est requis'),
  pays: Yup.string().required('Le pays est requis'),
  secteur_activite: Yup.string().required('Le secteur est requis'),
});

const customStyles = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? '1px solid #ed8b8b' : '1px solid #ed8b8b',
    fontSize: '16px',
    marginBottom: "15px",
    boxShadow: state.isFocused ? '0 0 1px #ed8b8b' : 'none',
    "@media all and (max-width: 440px)":{
      width: "300px",
      marginBottom: "14px"
  },
    width: "350px",
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

  const countryOptions = countriesList.map(pays => ({ value: pays, label: pays }));
  return (
    <Components.StyledForm onSubmit={formik.handleSubmit} autocomplete="off">
      <Components.StyledTitle>Informations sur l'entreprise</Components.StyledTitle>
      <Components.StyledLabel htmlFor="annees_activite">Nombre d'années d'activité<span className='required'> *</span></Components.StyledLabel>
      <Select 
        name="annees_activite"
        options={optionsYears}
        placeholder="Nombre d'années..."
        onChange={option => formik.setFieldValue("annees_activite", option.value)}
        value = {optionsYears.find(option => option.value === formik.values.annees_activite)}
        styles={customStyles}
      />
      <div className='error'>
        {formik.errors.annees_activite && formik.touched.annees_activite}
      </div>
      <Components.StyledLabel htmlFor="fullName">Brève description<span className='required'> *</span></Components.StyledLabel>
      <Components.StyledTextArea
        name="description"
        onChange={formik.handleChange}
        placeholder='Décrivez votre entreprise en quelques mots...'
        value={formik.values.description}
      />
      <div className='error'>
        {formik.errors.description && formik.touched.description}
      </div>
      <Components.StyledLabel htmlFor="equipe">Nombre de personnes sur le projet ?<span className='required'> *</span></Components.StyledLabel>
      <Components.StyledInput
            name="equipe"
            type="number"
            placeholder="Saisissez le nombre de personnes"
            onChange={formik.handleChange}
            value={formik.values.equipe}
        />
      <div className='error'>
        {formik.errors.equipe && formik.touched.equipe}
      </div>
      <Components.StyledLabel htmlFor="pays">Pays d'activité<span className='required'> *</span></Components.StyledLabel>
      <Select
        id="pays"
        name="pays"
        options={countryOptions}
        styles={customStyles}
        onChange={option => formik.setFieldValue("pays", option.value)}
        value={countryOptions.find(option => option.value === formik.values.pays)}
        placeholder="Choisir votre pays..." 
      />
      <div className='error'>
          {formik.errors.pays && formik.touched.pays}
      </div>
      <Components.StyledLabel htmlFor="secteur_activite">Secteur d'activité<span className='required'> *</span></Components.StyledLabel>
      <Select 
        name="secteur_activite"
        options={optionsActivity}
        placeholder="Secteur d'activité..."
        onChange={option => formik.setFieldValue("secteur_activite", option.value)}
        value={ optionsActivity.find(option => option.value === formik.values.secteur_activite) }
        styles={customStyles}
      />
      <div className='error'>
        {formik.errors.secteur_activite && formik.touched.secteur_activite}
      </div>
      <Components.ButtonContainer>
        <Components.StyledButtonBack type="button" onClick={() => setFormValues({ ...prevValues, step: prevValues.step - 1 })}>Retour</Components.StyledButtonBack>
        <Components.StyledButtonNext type="submit">Suivant</Components.StyledButtonNext>
      </Components.ButtonContainer>
    </Components.StyledForm>
  );
}