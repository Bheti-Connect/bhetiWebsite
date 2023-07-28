import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Components from "./styles";
import Select from 'react-select';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    travail_plein_temps: Yup.string().required('Veuillez choisir entre oui ou non'),
    lien_presentation: Yup.string(),
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
    const navigate = useNavigate();

    const notify = () => toast.success('Bheti Connect a bien reçu vos information 👏🏽', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => navigate(-1)
    });
    const formik = useFormik({
        initialValues: prevValues,
        validationSchema,
        onSubmit: (values, { setSubmitting }) => {
              // Access the value of the question field from the values object
      const questionValue = values.travail_plein_temps;

      // Convert "Yes" or "No" to true or false
      const convertedQuestionValue = questionValue === 'Oui' ? true : false;

      // Perform any necessary actions with the converted value
      console.log(convertedQuestionValue);
        fetch('https://api.bheticonnect.com/api/evaluations', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
        // Include any other headers your API requires
    },
    body: JSON.stringify({
        ...values, // Include all other form values
        travail_plein_temps: convertedQuestionValue, // Update the question value with the converted value
        }),
    })
    .then(response => {
    if (response.ok) {
        notify();  // Add this line
    } else {
        console.log("Failed to send form data.");
        return response.json(); // Convert the response data to JSON
    }
    })
    .then(data => {
    // If there was an error, the response data is now in the "data" variable
    console.log(data);
    })
    .catch(error => {
    console.error("An error occurred:", error);
    })
    .finally(() => {
    setSubmitting(false);
    });

            },
        
    });
    const options = [
        { value: 'Oui', label: 'Oui' },
        { value: 'Non', label: 'Non' },
    ];
    return (
        <div>
        <ToastContainer />
        <Components.StyledForm onSubmit={formik.handleSubmit} autocomplete="off">
            <Components.StyledTitle>Informations sur l'entreprise</Components.StyledTitle>
            <Components.StyledLabel htmlFor="travail_plein_temps">Travaller vous à temps plein sur ce projet ?<span className='required'> *</span></Components.StyledLabel>
            <Select 
                name="travail_plein_temps"
                options={options}
                placeholder="Choisir une option..."
                onChange={option => formik.setFieldValue("travail_plein_temps", option.value)}
                value = {options.find(option => option.value === formik.values.travail_plein_temps)}
                styles={customStyles}
            />
            <Components.StyledLabel htmlFor="lien_presentation">Presentation de votre entreprise</Components.StyledLabel>
            <Components.StyledInput
                name="lien_presentation"
                type="text"
                placeholder="Mettez le lien de votre presentation ici"
                onChange={formik.handleChange}
                value={formik.values.lien_presentation}
            />
            <Components.ButtonContainer>
                <Components.StyledButtonBack type="button" onClick={() => setFormValues({ ...prevValues, step: prevValues.step - 1 })}>Retour</Components.StyledButtonBack>
                <Components.StyledButtonSend type="submit">Envoyer</Components.StyledButtonSend>
            </Components.ButtonContainer>
        </Components.StyledForm>
        </div>
    );
}