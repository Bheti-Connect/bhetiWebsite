import React, { useState } from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import { useFormik } from 'formik';
import  {useNavigate}  from 'react-router-dom';
import { useTheme } from '../../context/themeContext';
import FormSent from '../../assets/images/waitlistSuccess.svg';
import * as Components from "../Evaluation/styles"
import Select from 'react-select';
import { projects } from "../Evaluation/formData"

const customStyles = {
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? '1px solid #db6363' : '1px solid #363434',
        fontSize: '16px',
        marginTop: "10px",
        marginBottom: "15px",
        boxShadow: state.isFocused ? '0 0 1px #ed8b8b' : 'none',
        "@media all and (max-width: 440px)":{
            width: "300px",
            marginBottom: "14px"
        },
        width: "350px",
        '&:hover': {
            border: state.isFocused ? '1px solid #944848' : '1px solid #944848'
        }
        }),
        option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? '#a82d2d' : '#f5ebeb'
    }),
}

const InvestmentOpportunityForm = () => {
    const history = useNavigate();
    const theme = useTheme();

    const [formData, setFormData] = useState({
        fullName: '',
        website: '',
        email: '',
        companyName: ''
        });
        
        const [touchedFields, setTouchedFields] = useState({});
        const [isValidEmail, setIsValidEmail] = useState(true);
        const [isValidWebsite, setIsValidWebsite] = useState(true);
        const [isSubmitted, setIsSubmitted] = useState(false);

        
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
            if (name === 'email') {
                setIsValidEmail(validateEmail(value));
                }
            if (name === 'website') {
                    setIsValidWebsite(validateWebsite(value));
                }
        };

        const validateEmail = (email) => {
            const emailRegex = /^\S+@\S+\.\S+$/;
            return emailRegex.test(email);
            };

        const validateWebsite = (website) => {
            // Regular expression pattern for website validation
            const websiteRegex = /^(ftp|http|https):\/\/[^ "]+$/;
            return websiteRegex.test(website);
            };
        
        const handleInputBlur = (e) => {
            const { name } = e.target;
            setTouchedFields({ ...touchedFields, [name]: true });
        };
        
        const handleSubmit = async(e) => {
            e.preventDefault();

            try{
                if(!formData.fullName || !formData.email || !formData.companyName || !formData.website){
                    alert('Veuillez remplir tous les champs');
                    return;
                }
            const headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
            };
            let body = {
                "nom": formData.fullName,
                "email": formData.email,
                "societe": formData.companyName,
                "siteweb": formData.website
            }
        
            let data = await fetch('https://api.bheticonnect.com/api/waitlists', {
                method: 'POST', 
                headers,
                body: JSON.stringify(body),
            });
            let response = await data.json();
            console.log(response);
            } catch(error){
                console.log(error);
            }
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                history('/');
            }, 6000);
        };

        // Check if the email exists in the database  before submitting the form
        const checkEmailExists = async (email) => {
            try {
              // Make an API call or database query to check if the email exists
              // Return true if the email exists, and false otherwise
                const response = await fetch(`/api/check-email?email=${email}`);
                const data = await response.json();
                return data.exists;
                } catch (error) {
                console.error('Error checking email:', error);
                return false;
                }
            };
        
            const projectOptions = projects.map(project => ({ value: project, label: project }));

    return (
        <FormulaireStyled theme={theme}>
        {isSubmitted && <Confetti width={window.innerWidth} height={window.innerHeight} />}
                {
                    isSubmitted ? (
                    <div className='image'>
                        <h3> Félicitations, votre demande a êtê prise en compte  !</h3>
                        <img src={FormSent} alt="Success" className="success-image" />
                    </div>
                    ) : ( 
                    <div>
                        <Components.StyledForm className='form__elements' onSubmit={handleSubmit}>
                        <Components.StyledTitle>Accédez à des opportunités d'investissement exclusives</Components.StyledTitle>
                                <Components.StyledDiv>
                                    <Components.StyledLabel htmlFor="fullName">Votre nom <span className='required'>*</span></Components.StyledLabel>
                                </Components.StyledDiv>
                                <Components.StyledInput
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    placeholder='ex: Richard Nkulu'
                                    className={touchedFields.fullName && !formData.fullName.trim() ? 'error' : formData.fullName.trim() ? 'valid' : ''}
                                />
                                {touchedFields.fullName && !formData.fullName.trim() && <p className='error__message'>Veuillez saisir votre nom complet.</p> }
                                <Components.StyledDiv>
                                    <Components.StyledLabel htmlFor="email" id='email_label'>Votre adresse e-mail <span className='required'>*</span></Components.StyledLabel>
                                </Components.StyledDiv>
                                <Components.StyledInput
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    placeholder='ex: nom@email.com'
                                    className={touchedFields.email && !formData.email.trim() || !isValidEmail ? 'error' : formData.email.trim() ? 'valid' : ''}
                                />
                                {touchedFields.email && !formData.email.trim() && <p className='error__message'>Veuillez saisir votre adresse électronique.</p> }
                                {!isValidEmail && <p className='error__message'>Veuillez saisir une adresse email valide</p>}
                                <Components.StyledDiv>
                                    <Components.StyledLabel htmlFor="website" id='website_label'>Opportunité d'investissement <span className='required'>*</span></Components.StyledLabel>
                                </Components.StyledDiv>
                                <Select
                                    id="pays"
                                    name="pays"
                                    options={projectOptions}
                                    styles={customStyles}
                                    onChange={option => ("pays", option.value)}
                                    value={projectOptions.find(option => option.value === project)}
                                    placeholder="Choisir votre pays..." 
                                />
                                {touchedFields.website && !formData.website.trim() && <p className='error__message'>Veuillez saisir le lien de votre site web ou Linkedin</p>}
                                {!isValidWebsite && <p className='error__message'>Veuillez insérer un lien valide</p>}
                                <Components.StyledDiv>
                                    <Components.StyledLabel htmlFor="email" id='email_label'>Votre société d'investissement <span className='required'>*</span></Components.StyledLabel>
                                </Components.StyledDiv>
                                <Components.StyledInput
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    placeholder='Ecrivez business angel si vous en êtes un'
                                    className={touchedFields.email && !formData.email.trim() || !isValidEmail ? 'error' : formData.email.trim() ? 'valid' : ''}
                                />
                                {touchedFields.email && !formData.email.trim() && <p className='error__message'>Veuillez saisir votre adresse électronique.</p> }
                                <Components.StyledDiv>
                                    <Components.StyledLabel htmlFor="email" id='email_label'>Autre</Components.StyledLabel>
                                </Components.StyledDiv>
                                <Components.StyledTextArea
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    className={touchedFields.email && !formData.email.trim() || !isValidEmail ? 'error' : formData.email.trim() ? 'valid' : ''}
                                />
                            <div className='button__container'>
                                <Components.StyledButtonSend className='envoyer' type="submit">Envoyer</Components.StyledButtonSend>
                            </div>
                        </Components.StyledForm>
                    </div>
                    )
                }
    </FormulaireStyled>
    )
}

const FormulaireStyled = styled.section`
    
`

export default InvestmentOpportunityForm;