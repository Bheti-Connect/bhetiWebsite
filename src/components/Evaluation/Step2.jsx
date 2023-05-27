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
    border: state.isFocused ? '1px solid blue' : '1px solid gray',
    boxShadow: state.isFocused ? '0 0 1px blue' : 'none',
    width: "25vw",
    '&:hover': {
      border: state.isFocused ? '1px solid blue' : '1px solid gray'
    }
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? 'lightgray' : 'white'
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
      <Select 
        name="yearsOfActivity"
        options={options}
        placeholder="Nombre d'année d'activité..."
        onChange={formik.handleChange}
        value={formik.values.yearsOfActivity}
        styles={customStyles}
      />
      <textarea
        name="description"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <select
        name="country"
        onChange={formik.handleChange}
        value={formik.values.country}
      >
        <option value="">Select...</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>
      <input
        name="sector"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.sector}
      />
      <button type="submit">Next</button>
    </Components.StyledForm>
  );
}