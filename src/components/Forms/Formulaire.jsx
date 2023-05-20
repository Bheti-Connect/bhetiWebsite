import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import Blob from '../../assets/images/img-1.png';
import Blob2 from '../../assets/images/img-2.png';
import Blob3 from '../../assets/images/img-3.png';
import Blob4 from '../../assets/images/img-4.png';
import BhetiWhite from '../../assets/images/bheti-white.png';


const Formulaire = () => {
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
        
        const handleSubmit = (e) => {
            e.preventDefault();
        
            if (validateForm()) {
            console.log('Form submitted:', formData);
            }
        };
        
    return (
        <FormulaireStyled theme={theme}>
            <div className='container'>
                <img className='blob-one' src={Blob} alt='blob1'/>
                <img className='blob-two' src={Blob2} alt='blob2'/>
                <img className='blob-three' src={Blob3} alt='blob3'/>
                <img className='blob-four' src={Blob4} alt='blob4'/>
            </div>
            <div className='container-child'>
                <div className='container-bheti'>
                    <img className='white-logo' src={BhetiWhite} alt='bheti-white-logo' />
                    <h3>
                        Rejoindre la liste d’attente pour accéder à l’application dès quelle sera disponibe.
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
                                placeholder='ex: Richard Cool'
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
    </FormulaireStyled>
    )
}

const FormulaireStyled = styled.section`
    @media all and (max-width: 768px) {
        height: 1100px;
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
    .container-child{
        display: flex;
        margin: -1% 25%;
        @media all and (max-width: 1500px) {
            margin: -1% 17%;
        }
        @media all and (max-width: 1300px) {
            margin: 0% 19%;
        }
        @media all and (max-width: 1024px){
            margin: 7% 10%;
        }
        @media all and (max-width: 768px) {
            display:block;
            margin: 13% 16%;
        }
        @media all and (max-width: 600px) {
            margin: 18vh 10%;
        }
        .container-bheti{
            position: relative;
            width: 60vw;
            height: 650px;
            top: -200px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            background-color: ${props => props.theme.colorBheti};
            .white-logo{
                position: relative;
                width: 40%;
                left: 25%;
                margin: 150px 10px  10px;
                @media all and (max-width: 440px){
                    margin: 120px 0px  40px;
                    left: 1%;
                }
            }
            h3{
                font-size: 1.1rem;
                margin: 10% 10% 0%;
                color: ${props => props.theme.colorWhiteIsh};
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
                height: 400px;
                border-bottom-left-radius: 0px;
                border-top-right-radius: 20px;
            }
            @media all and (max-width: 440px) {
                width: 80vw;
            }
        }
        .container-form{
            position: relative;
            float: left;
            width: 50vw;
            height: 650px;
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
                        height: 150%;
                        border-radius: 10px;
                        font-size: 1rem;
                        padding: 1px 1px 0px 20px ;
                        color: #1E0101;
                        /* background: ${props => props.theme.colorWhiteIsh}; */
                        border: 1px solid black;
                        -webkit-transition: 0.3s;
                        transition: 0.3s;
                        outline: none;
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
                            margin-left: -50px;
                            font-size: 17px;
                        }
                        #website_label{
                            margin-left: 0px
                        }
                        #email_label{
                            margin-left: -90px
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
                    font-size: 16px;
                    letter-spacing: 1px;
                    text-decoration: none;
                    font-family: 'Montserrat', sans-serif;
                    width: 110px;
                    color: ${props => props.theme.colorBlack};
                    cursor: pointer;
                    border: 1px solid;
                    padding: 0.25em 0.5em;
                    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px ;
                    position: relative;
                    user-select: none;
                    -webkit-user-select: none;
                    touch-action: manipulation;
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
            @media all and (max-width: 440px){
                width: 80vw;
            }
        }
    }

`

export default Formulaire;