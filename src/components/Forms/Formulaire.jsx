import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import {optionsActivity} from './FormInput';
import Blob from '../../assets/images/img-1.png';
import Blob2 from '../../assets/images/img-2.png';
import Blob3 from '../../assets/images/img-3.png';
import Blob4 from '../../assets/images/img-4.png';
import BhetiWhite from '../../assets/images/bheti-white.png';


const Formulaire = () => {
    const theme = useTheme();

    const [formData, setFormData] = useState({
        companyName: '',
        fullName: '',
        email: '',
        website: ''
    });

    const [errors, setErrors] = useState({});
    const [fieldFocus, setFieldFocus] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Veuillez saisir votre nom complet.';
            valid = false;
            }
        
            if (!formData.website.trim()) {
            newErrors.website = 'Veuillez saisir le lien de votre site web.';
            valid = false;
            }
        
            if (!formData.email.trim()) {
            newErrors.email = 'Veuillez saisir une adresse électronique valide.';
            valid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Veuillez saisir une adresse électronique valide.';
            valid = false;
            }
        
            if (!formData.companyName.trim()) {
            newErrors.companyName = 'Veuillez saisir le nom de votre entreprise.';
            valid = false;
            }
        
            setErrors(newErrors);
            return valid;
        };

        const handleInputBlur = () => {
            setFieldFocus(false);
            if (!formData.fullName.trim()) {
                setShowMessage(true);
                }
            };
            
            const handleInputFocus = () => {
                setShowMessage(false);
                setFieldFocus(true);
            };

        const handleSubmit = (e) => {
            e.preventDefault();

            if (validateForm()) {
              // Call your API to send the form data here
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
                                onFocus={handleInputFocus}
                                placeholder='Nom de la société'
                            />
                        {fieldFocus && showMessage && <p>Please enter your company name.</p>}

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
                                onFocus={handleInputFocus}
                                placeholder='Nom complet'
                            />
                            {fieldFocus && showMessage && <p>Please enter your full name.</p>}
                        </div>
                        <div className='input-div'>
                            <label>Adresse Email <span>*</span></label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                placeholder='Adresse Email'
                            />
                            {fieldFocus && showMessage && <p>Please enter an email address.</p>}
                        </div>
                        <div className='input-div'>
                            <label>Site web/LinkedIn de votre startup <span>*</span></label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                placeholder='Lien site web ouLinkedIn'
                            />
                            {fieldFocus && showMessage && <p>Please enter a website link.</p>}
                            
                        </div>
                        <div className='latest-controlls'>
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
    }

    .container-child{
        display: flex;
        margin: 0% 25%;
        @media all and (max-width: 1300px) {
            margin: 0% 20%;
        }
        @media all and (max-width: 768px) {
            display:block;
            margin: 13% 16%;
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
            }
            h3{
                font-size: 1.1rem;
                margin: 10% 10% 0%;
                color: ${props => props.theme.colorWhiteIsh} ;
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
                width: 80vw;
                height: 600px;
            }
            @media all and (max-width: 768px) {
                width: 65vw;
                height: 400px;
                border-bottom-left-radius: 0px;
                border-top-right-radius: 20px;

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
                    margin: 17% 2% 5%;
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
                        margin-left: 12px;
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
                    
                }
            }
            .latest-controlls{
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
        }
    }

`

export default Formulaire;