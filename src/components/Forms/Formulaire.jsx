import React, { useState } from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import  {useNavigate}  from 'react-router-dom';
import { useTheme } from '../../context/themeContext';
import FormSent from '../../assets/images/waitlistSuccess.svg';
import Blob from '../../assets/images/img-1.png';
import Blob2 from '../../assets/images/img-2.png';
import Blob3 from '../../assets/images/img-3.png';
import Blob4 from '../../assets/images/img-4.png';
import BhetiWhite from '../../assets/images/bheti-white.png';


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
        
    return (
        <FormulaireStyled theme={theme}>
        {isSubmitted && <Confetti width={window.innerWidth} height={window.innerHeight} />}
                {
                    isSubmitted ? (
                    <div className='image'>
                        <h3> Félicitations, vous avez bien rejoins la waitlist !</h3>
                        <img src={FormSent} alt="Success" className="success-image" />
                    </div>
                    ) : ( 
                        <div className='container-child'>
                    <div className='container-bheti'>
                        <img className='white-logo' src={BhetiWhite} alt='bheti-white-logo' />
                        <h3>
                            Rejoindre la liste d’attente pour accéder à l’application dès qu'elle sera disponibe.
                        </h3>
                    </div>
                    <div className='container-form'>
                        <form className='form__elements' onSubmit={handleSubmit}>
                            <div className='input-div'>
                                <label>Nom de la société <span>*</span></label>
                                <input
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
                            </div>
                            <div className='input-div'>
                                <label htmlFor="fullName">Votre Nom complet <span>*</span></label>
                                <input
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
                            </div>
                            <div className='input-div'>
                                <label htmlFor="email" id='email_label'>Adresse Email <span>*</span></label>
                                <input
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
                            </div>
                            <div className='input-div'>
                                <label htmlFor="website" id='website_label'>Site web/LinkedIn de votre startup <span>*</span></label>
                                <input
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
                            </div>
                            <div className='button__container'>
                                <button className='envoyer' type="submit"> Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
                    )
                }
    </FormulaireStyled>
    )
}

const FormulaireStyled = styled.section`
    @media all and (max-width: 768px) {
        height: 900px;
    }
    @media all and (max-width: 440px) {
        height: 700px;
    }
    .container {
        z-index: -100;
        img {
            transition: all .3s ease-in-out;
            &:hover{
                transform: scale(1.05) rotate(3deg);
            }
        }
        .blob-one{
            position: absolute;
            right: 2px;
            width: 25%;
            
        }
        .blob-two{
            position: absolute;
            right: 2px;
            bottom: 600px ;
            width: 28%;
        }
        .blob-three{
            position: absolute;
            left: 3px;
            bottom: 500px;
            width: 30%;
        }
        .blob-four{
            width: 21%;
        }
        @media all and (max-width: 1400px) {
            .blob-one{
                right: 15px;
            }
            .blob-two{
                right: -3px;
            }
            .blob-three{
                left: -5px;
                margin-bottom: 24px;
            }
        }
        @media all and (max-width: 1024px) {
            .blob-one{
                right: -1px;
            }
            .blob-two{
                bottom: 800px;
                right: -4px;
            }
            .blob-three{
                bottom: 800px;
            }
        }
    }
    .image{
        position:relative;
        width: 60vw;
        margin: 50px auto;
        h3{
            font-family: 'Montserrat', sans-serif;
            width:60%;
            color: ${props => props.theme.colorBheti};
            margin: 0 auto;
        }
        .success-image{
            display: block;
            margin: auto;
            width: 60%;
        }
        @media all and (max-width: 768px) {
            width: 90vw;
            margin: 130px auto;
            h3{
                font-size: 1.5rem;
                width: 100%;
            }
            .success-image{
                width: 90%;
            }
        }
    }
    .container-child{
        display: flex;
        margin: 20% 25% 0%;
        @media all and (max-width: 1300px) {
            margin: 23% 19% 0%;
        }
        @media all and (max-width: 1024px){
            margin: 7% 10% 0%;
        }
        @media all and (max-width: 768px) {
            display:block;
            margin: 40% 16%;
        }
        @media all and (max-width: 600px) {
            margin: 60% 10% 0%;
        }
        @media all and (max-width: 440px) {
            margin: 60% 5% 0%;
        }
        .container-bheti{
            position: relative;
            width: 50vw;
            height: 600px;
            top: -200px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            background-color: ${props => props.theme.colorBheti};
            .white-logo{
                position: relative;
                width: 40%;
                left: 25%;
                margin: 150px 10px  10px;
                @media all and (max-width: 768px){
                    margin: 40px 0px  0px;
                }
                @media all and (max-width: 440px){
                    margin: 40px 0px  0px;
                    left: 1%;
                }
            }
            h3{
                font-size: 1.1rem;
                margin: 10% 10% 0%;
                color: ${props => props.theme.colorWhiteIsh};
                @media all and (max-width: 768px){
                    font-size: .95rem;
                }
            }
            p{
                font-size: 0.8rem;
                margin: 10% 10% 0%;
                color: ${props => props.theme.colorWhiteIsh}
            }
            .second-paragraph{
                margin-top: 2%;
            }
            @media all and (max-width: 1500px) {
                width: 850px;
                height: 600px;
            }
            @media all and (max-width: 1300px) {
                width: 70vw;
                height: 600px;
            }
            @media all and (max-width: 768px) {
                width: 65vw;
                height: 300px;
                border-bottom-left-radius: 0px;
                border-top-right-radius: 20px;
            }
            @media all and (max-width: 600px) {
                width: 80vw;
                height: 220px;
            }
            @media all and (max-width: 440px) {
                width: 90vw;
                height: 220px;
            }
        }
        .container-form{
            position: relative;
            float: left;
            width: 50vw;
            height: 600px;
            top: -200px;
            background-color: ${props => props.theme.colorWhite};
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            form{
                margin: auto;
                .input-div{
                    font-size: 15.8px;
                    display: grid;
                    width: 85%;
                    margin: 15% 2% 5%;
                    span{
                        color: red;
                    }
                    label{
                        margin-bottom: 3%;
                    }
                    input {
                        height: 140%;
                        width: 110%;
                        border-radius: 10px;
                        font-size: .87rem;
                        padding: 1px 1px 0px 20px ;
                        color: #1E0101;
                        /* background: ${props => props.theme.colorWhiteIsh}; */
                        border: 1px solid black;
                        -webkit-transition: 0.3s;
                        transition: 0.3s;
                        outline: none;
                        @media all and (max-width: 440px){
                            width: 110%;
                        }
                    }
                    input[type=text]:focus {
                        border: 4px solid #9e3a3a;
                    }
                    .error {
                        border: 1px solid red;
                        }
                    .valid {
                        border: 2px solid #28B463;
                        }
                    .error__message{
                        color: ${props => props.theme.colorBheti};
                        @media all and (max-width: 768px){
                                margin: 15px -8px;
                        }
                        @media all and (max-width: 1500px){
                            margin: 12px 13px;
                        }
                    }
                    @media all and (max-width: 768px){
                        margin: 8% 2% 5%;
                    }
                    @media all and (max-width: 440px){
                        margin: 10% 2% 5%;
                        label{
                            margin-left: -100px;
                            font-size: 12.5px;
                        }
                        #website_label{
                            margin-left: -2px
                        }
                        #email_label{
                            margin-left: -130px
                        }
                    }
                }
            }
            .button__container{
                display: flex;
                justify-content: end;
                margin-top: 2.5rem;
                width: 83%;
                .envoyer {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #641c1c;
                    color: #fff;
                    border-radius: 20px;
                    border: none;
                    cursor: pointer;
                    &:hover {
                        background-color: #7a2323;
                    }
                    }

                    .envoyer:active {
                        box-shadow: 0px 0px 0px 0px;
                        top: 5px;
                        left: 5px;
                    }

                    @media (min-width: 768px) {
                    .envoyer {
                        padding: 0.25em 0.75em;
                        }
                    }
            }
            @media all and (max-width: 1500px) {
                width: 900px;
                height: 600px;
            }
            .form__elements{
                width: 90%;
                @media all and (max-width: 768px) {
                    margin: 20% 5%;
                }            
            }
            @media all and (max-width: 1300px) {
                width: 70vw;
                height: 600px;
            }
            @media all and (max-width: 768px) {
                width: 65vw;
                border-top-right-radius: 0px;
                border-bottom-left-radius: 20px;
            }
            @media all and (max-width: 600px){
                width: 80vw;
                height: 500px;
            }
            @media all and (max-width: 440px){
                width: 90vw;
                height: 500px;
            }
        }
    }

`

export default Formulaire;