import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";
import Select from 'react-select';


const validationSchema = Yup.object().shape({
    fullTime: Yup.string().required('Required'),
    presentationLink: Yup.string().required('Required'),
    });

    const customStyles = {
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? '1px solid #ed8b8b' : '1px solid #ed8b8b',
        fontSize: '16px',
        boxShadow: state.isFocused ? '0 0 1px #ed8b8b' : 'none',
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


export default function Step4({ setFormValues, prevValues }) {
    const formik = useFormik({
        initialValues: prevValues,
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            // Here you can handle the form submission.
            // It's inside an async function, so you can use await if needed.
            console.log(values);
            try {
              // Validate form data
              // This can be custom validation or an API call to a server-side validation method
                const validationResponse = await validateData(values);
        
                if (validationResponse.isValid) {
                    // Send form data
                    // This can be a POST request to your server or any other form of data handling
                    const submissionResponse = await sendData(values);
        
                    if (submissionResponse.success) {
                    // Navigate to the next step or display a success message
                    setFormValues({ ...values, step: values.step + 1 });
                    } else {
                    // Handle errors during submission
                    // This could involve setting an error state or displaying an error message
                    }
                } else {
                    // Handle validation errors
                    // This could involve setting an error state or displaying an error message
                }
                } catch (error) {
                // Handle any other errors
                } finally {
                setSubmitting(false);
                }
            },
        
    });

    const options = [
        { value: 'Oui', label: 'Oui' },
        { value: 'Non', label: 'Non' },
    ];

    return (
        <Components.StyledForm onSubmit={formik.handleSubmit}>
            <Components.StyledTitle>Informations sur l'entreprise</Components.StyledTitle>
            <Components.StyledLabel htmlFor="prevTurnOver">Travaller vous à temps plein sur ce projet?</Components.StyledLabel>
            <Select 
                name="yearsOfActivity"
                options={options}
                placeholder="Choisir une option..."
                onChange={option => formik.setFieldValue("yearsOfActivity", option.value)}
                value = {options.find(option => option.value === formik.values.fullTime)}
                styles={customStyles}
            />
            <Components.StyledLabel htmlFor="presentationLink">Presentation de votre entreprise</Components.StyledLabel>
            <Components.StyledInput
                name="presentationLink"
                type="text"
                placeholder="Mettez le lien de votre presentation ici"
                onChange={formik.handleChange}
                value={formik.values.presentationLink}
            />
            <Components.ButtonContainer>
                <Components.StyledButtonBack type="button" onClick={() => setFormValues({ ...prevValues, step: prevValues.step - 1 })}>Retour</Components.StyledButtonBack>
                <Components.StyledButtonSend type="submit">Envoyer</Components.StyledButtonSend>
            </Components.ButtonContainer>
        </Components.StyledForm>
    );
}