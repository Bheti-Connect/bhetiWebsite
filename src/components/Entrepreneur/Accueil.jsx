import React from 'react'
import styled from 'styled-components'
import Talking from '../../assets/images/pexels-picha-stock-3894383-1.png';
import Blob1 from '../../assets/images/magicpattern-blob-1.png';
import Blob2 from '../../assets/images/magicpattern-blob-2.png'
import Tamtam from '../../assets/images/tamTam.png'

import Button from '../Button';
import { useTheme } from '../../context/themeContext';



const Accueil = () => {
    const theme = useTheme();
    return (
        <AccueilStyled className='u-pad-lg-2'  theme={theme}>
            <div className='first-container'>
                <div className='headache'>
                    <h1 className='centered'>Résolvez le <span>casse</span> tête du financement de votre entreprise</h1>
                    <img className='girls-talk' src={Talking} alt='Image-Femmes'/>
                </div>
                <div className='text-highlighted'>
                    <p>Convaincre un investisseur, obtenir des financements, faire une levée de fonds … Autant de choses qui vous paraissent insolubles?</p>
                    <p>En plus de nos outils prisés par les experts du monde des startups, bénéficiez de l’accompagnement de nos meilleurs conseillers.</p>
                </div>
                <div className='button-demo'>
                        <Button 
                            name={'Je réserve une demo'}
                            icon={'fas fa-chevron-right'}
                            arrow={'arrow'}
                            blob={'blob'}
                        />
                    </div>
                <div className='bheti-box'>
                    <img className='blobImg-1' src={Blob1} />
                    <img className='blobImg-2' src={Blob2} />
                    <img className='tamtam-img' src={Tamtam} />
                </div>
            </div>
        </AccueilStyled>
    )
}

const AccueilStyled = styled.section`
        .first-container{
        .headache {
            position: relative;
            margin: auto;
            margin-top: 2%;
            align-items: center;
            border-radius: 7px;
            span{
                color: ${props => props.theme.colorWhite} ;
            }
            img{
                width: 70%;
            }
            .girls-talk{
                border-bottom-left-radius: 40px;
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    margin-left: 380px;
                    width: 55%;
                    margin-top: 7%;
                }
                @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    margin-left: 200px;
                    margin-top: 8%;
                }
                @media only screen and (max-width: 525px) and (min-width: 425px) {
                    margin-left: -80px;
                    margin-top: 10%;
                    width: 125%;
                    height: 250px;
                }
            }
            
            .centered{    
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-weight: 900;
                font-size: 50px; 
                color: ${props => props.theme.colorBheti}; 
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    transform: translate(-150%, -90%);
                    width: 500px;
                }
                @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    transform: translate(-170%, -50%);
                    width: 380px;
                    font-size: 59px; 
                }
                @media only screen and (max-width: 525px) and (min-width: 425px) {
                    width: 420px;
                    font-size: 40px;
                    transform: translate(-50%, 100%);
                    color: ${props => props.theme.colorBheti}; 
                }
            }
        }
        .text-highlighted{
            align-items: center;
            margin-top: 2%;
            @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                margin-top: 10%;
                font-size: 1.4rem;
                text-align: justify;
            }
            @media only screen and (max-width: 525px) and (min-width: 425px) {
                margin-top: 10%;
                font-size: 1.01rem;
                text-align: justify;
                width: 420px;
                margin-top: 200px;
                margin-left: -80px;
            }
        }
        .button-demo{
            margin: 40px 500px 0px;
            @media only screen and (max-width: 1440px) and (min-width: 1350px){
                width: 80%;
                margin: 40px 350px 0px;
            }
            @media only screen and (max-width: 525px) and (min-width: 425px) {
                width: 100%;
                margin: 50px 0px 0px;
            }
        }
        @media only screen and (max-width: 525px) and (min-width: 425px)  {
            width: 220px;
            margin-left: -150px;
        }
    }
    .bheti-box{
        position: absolute;
        width: 980px;
        height: 700px;
        right: 0px;
        top: 78px;
        z-index: -100;
        background-color: #641C1C;
        .blobImg-1{
            position: absolute;
            right: -30px;
            bottom: -100px;
            @media all and (max-width: 2500px) {
                width: 35%;
            }
            @media all and (max-width: 1800px) {
                width: 25%;
            }
            @media all and (max-width: 1500px) {
                width: 23%;
            }
            @media all and (max-width: 1300px)  {

            }
            @media all and (max-width: 1080px) {
                width: 20%;
            }

            @media only screen and (max-width: 525px) and (min-width: 425px) {
                width: 25%;
                right: 0px;
                bottom: -20px;
            }
        }
        .blobImg-2{
            position: absolute;
            right: -10px;
            top: -50px;
            @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                width: 20%;
            }
            @media only screen and (max-width: 525px) and (min-width: 425px) {
                width: 35%;
                left: -45px;
                top: 0px;
            }
        }
        .tamtam-img{
            display: block;
            margin-top: 8%;
            margin-left: auto;
            margin-right: auto;
            width: 40%;
            @media only screen and (max-width: 1440px) and (min-width: 1350px){
                width: 50%;
                margin-top: 7%;
            }
            @media only screen and (max-width: 525px) and (min-width: 425px) {
                width: 90%;
                margin-top: 80px;
             }
        }
        @media only screen and (max-width: 1440px) and (min-width: 1350px){
            width: 720px;
        }
        @media only screen and (max-width: 525px) and (min-width: 425px) {
                width: 250px;
                height: 417px;
                top: 0px;
            }
    }
`;


export default Accueil