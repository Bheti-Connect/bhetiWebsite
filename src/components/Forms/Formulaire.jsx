import React, { useState } from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import  {useNavigate}  from 'react-router-dom';
import { useTheme } from '../../context/themeContext';
import FormSent from '../../assets/images/waitlistSuccess.svg';
import * as Components from "../Evaluation/styles"


const Formulaire = () => {
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
            }, 5000);
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
        
    return (
        <FormulaireStyled theme={theme}>
        {isSubmitted && <Confetti width={window.innerWidth} height={window.innerHeight} />}
                {
                    isSubmitted ? (
                    <Components.StyledMessagediv>
                        <h3> Félicitations, vous avez bien rejoins la waitlist !</h3>
                        <img src={FormSent} alt="Success" className="success-image" />
                    </Components.StyledMessagediv>
                    ) : ( 
                    <div>
                        <Components.StyledForm className='form__elements' onSubmit={handleSubmit}>
                        <Components.StyledTitle>Rejoindre la waitlist 📑</Components.StyledTitle>
                                <Components.StyledLabel>Nom de la société <span className='required'>*</span></Components.StyledLabel>
                                <Components.StyledInput
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    placeholder='ex: Bheti Connect'
                                    className={touchedFields.companyName && !formData.companyName.trim() ? 'error' : formData.companyName.trim() ? 'valid' : ''}
                                />
                            {touchedFields.companyName && !formData.companyName.trim() && <p className='error__message'>Veuillez saisir le nom de votre entreprise.</p>}
                                <Components.StyledLabel htmlFor="fullName">Votre Nom complet <span className='required'>*</span></Components.StyledLabel>
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
                                <Components.StyledLabel htmlFor="email" id='email_label'>Adresse Email <span className='required'>*</span></Components.StyledLabel>
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
                                <Components.StyledLabel htmlFor="website" id='website_label'>Site web/LinkedIn de votre startup <span className='required'>*</span></Components.StyledLabel>
                                <Components.StyledInput
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    placeholder='ex: https://bheticonnect.com/'
                                    className={touchedFields.website && !formData.website.trim() || !isValidWebsite ? 'error' : formData.website.trim() ? 'valid' : ''}
                                />
                                {touchedFields.website && !formData.website.trim() && <p className='error__message'>Veuillez saisir le lien de votre site web ou Linkedin</p>}
                                {!isValidWebsite && <p className='error__message'>Veuillez insérer un lien valide</p>}
                            <div className='button__container'>
                                <Components.StyledButtonSend className='envoyer' type="submit"> Je rejoins</Components.StyledButtonSend>
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

export default Formulaire;