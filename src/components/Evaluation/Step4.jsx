import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";
import Select from 'react-select';




const validationSchema = Yup.object().shape({
    prevTurnOver: Yup.string().required('Required'),
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
        
         
        </Components.StyledForm>
    );
}