import React from 'react'
import styled from 'styled-components'
import Talking from '../../assets/images/pexels-picha-stock-3894383-1.png';
import Blob1 from '../../assets/images/magicpattern-blob-1.png';
import Blob2 from '../../assets/images/magicpattern-blob-2.png'

import Button from '../Button';
import { useTheme } from '../../context/themeContext';


const Accueil = () => {
    const theme = useTheme();
    return (
        <AccueilStyled className='u-pad-lg-2'  theme={theme}>
            <div className='first-container'>
                <div className='headache'>
                    <h1 className='centered'>Résolvez le casse tête du financement de votre entreprise</h1>
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
            .casse{
                color: ${props => props.theme.colorBlack} ;
                @media only screen and (max-width: 768px){

                }
                @media only screen and (max-width: 500px){
                    
                }
                @media only screen and (max-width: 425px){
                    color: ${props => props.theme.colorBlack} ;
                }
            }
            .resolvez{
                color: ${props => props.theme.colorBlack} ;
                @media only screen and (max-width: 768px){

                }
                @media only screen and (max-width: 500px){
                    
                }
                @media only screen and (max-width: 425px){
                    color: ${props => props.theme.colorBlack} ;
                }
            }
            img{
                width: 70%;
            }
            .girls-talk{
                animation: contentHide 1s ease-in-out;
                @keyframes contentHide {
                    0%{
                        opacity: 0;
                        transform: translateX(-10%) scaleX(0);
                        visibility: none;
                    }
                    100%{
                        opacity: 1;
                        transform: translateY(0) scale(1);
                        visibility: visible;
                    }
                }
                border-bottom-left-radius: 40px;
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    margin-left: 380px;
                    width: 55%;
                    margin-top: 7%;
                }
                @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    margin-left: 250px;
                    margin-top: 8%;
                }
                @media only screen and (max-width: 1350px) and (min-width: 1024px) {
                    margin-left: 200px;
                    width: 90%;
                    margin-top: 8%;
                }
                @media only screen and (max-width: 960px){
                    margin-left: -80px;
                    margin-top: 10%;
                    width: 180%;
                    height: 320px;
                }
                @media only screen and (max-width: 768px){
                    margin-left: -80px;
                    margin-top: 10%;
                    width: 125%;
                    height: 250px;
                }
                @media only screen and (max-width: 500px){
                    margin-left: -80px;
                    margin-top: 10%;
                    width: 125%;
                    height: 250px;
                }
                @media only screen and (max-width: 425px){
                    margin-left: -80px;
                    margin-top: 5%;
                    width: 115%;
                    height: 260px;
                }
                @media only screen and (max-width: 375px){
                    margin-left: -50px;
                    margin-top: 12%;
                    width: 120%;
                    height: 220px;
                }
                @media only screen and (max-width: 320px){
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
                font-size: 40px; 
                font-family: 'cinzel' ;
                color: ${props => props.theme.colorBlack}; 
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    transform: translate(-150%, -90%);
                    width: 500px;
                }
                @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    transform: translate(-145%, -40%);
                    width: 440px;
                    font-size: 38px; 
                }
                @media only screen and (max-width: 1350px) and (min-width: 1024px) {
                    transform: translate(-130%, -50%);
                    width: 400px;
                    font-size: 45px; 
                }
                @media only screen and (max-width: 960px){
                    width: 710px;
                    font-size: 46px;
                    transform: translate(-51%, 160%);
                    color: ${props => props.theme.colorBlack}; 
                }
                @media only screen and (max-width: 768px){
                    width: 350px;
                    font-size: 40px;
                    transform: translate(-120%, 40%);
                    color: ${props => props.theme.colorBlack}; 
                }
                @media only screen and (max-width: 500px){
                    width: 350px;
                    font-size: 33px;
                    transform: translate(-55%, 100%);
                    color: ${props => props.theme.colorBheti}; 
                }
                @media only screen and (max-width: 425px){
                    font-size: 35px;
                    transform: translate(-60%, 175%);
                    color: ${props => props.theme.colorBlack}; 
                }
                @media only screen and (max-width: 375px){
                    width: 300px;
                    text-align: center;
                    font-size: 31.3px;
                    transform: translate(-60%, 190%);
                    color: ${props => props.theme.colorBlack};
                }
            }
        }
        .text-highlighted{
            align-items: center;
            margin-top: 2%;
            @media only screen and (max-width: 1440px) {
                margin-top: 15%;
                font-size: 1.3rem;
                text-align: justify;
                width: 860px;
            }
            @media only screen and (max-width: 1350px) and (min-width: 1024px) {
                margin-top: 20%;
                font-size: 1.4rem;
                text-align: justify;
                width: 860px;
                margin-left: -100px;
            }
            @media only screen and (max-width: 960px) {
                margin-top: 12%;
                font-size: 1.25rem;
                text-align: justify;
                width: 600px;
                margin-top: 200px;
                margin-left: -20vw;
            }
            @media only screen and (max-width: 768px) {
                margin-top: 10%;
                font-size: 1.01rem;
                text-align: justify;
                width: 320px;
                margin-top: 200px;
                margin-left: -80px;
            }
            @media only screen and (max-width: 425px) {
                margin-top: 10%;
                font-size: 1.01rem;
                text-align: justify;
                width: 320px;
                margin-top: 200px;
                margin-left: -80px;
            }
            @media only screen and (max-width: 375px) {
                margin-top: 10%;
                font-size: 1.01rem;
                text-align: justify;
                width: 300px;
                margin-top: 200px;
                margin-left: -70px;
            }
        }
        .button-demo{
            position: relative;
            margin-left: 35%;
            @media only screen and (max-width: 1440px){
                margin-top: 30px ;
            }
            @media only screen and (max-width: 425px){
                width:100%;
                margin: auto;
            }
        }
        @media only screen and (max-width: 768px) {
            width: 220px;
            margin-left: 130px;
        }
        @media only screen and (max-width: 500px) {
            width: 220px;
            margin-left: 130px;
        }
        @media only screen and (max-width: 425px) {
            width: 270px;
            margin-left: 120px;
        }
        @media only screen and (max-width: 375px) {
            width: 220px;
            margin-left: 100px;
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
            right: 200px;
            bottom: 60px;
            @media all and (max-width: 2500px) {
                width: 35%;
            }
            @media all and (max-width: 1800px) {
                width: 25%;
            }
            @media all and (max-width: 1500px) {
                width: 50%;
            }
            @media all and (max-width: 1300px)  {
                width: 30%;
                
            }
            @media all and (max-width: 1080px) {
                width: 20%;
            }
            @media all and (max-width: 960px) {
                width: 40%;
                right: 1px;
                bottom: -50px;
            }
            @media all and (max-width: 768px) {
                width: 25%;
                right: 2px;
                bottom: -20px;
            }
            @media only screen and (max-width: 525px) {
                width: 25%;
                right: 2px;
                bottom: -20px;
            }
            @media only screen and (max-width: 425px){
                width: 25%;
                right: 2px;
                bottom: -20px;
            }
        }
        .blobImg-2{
            position: absolute;
            left: -125px;
            top: 0px;
            @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                width: 40%;
            }
            @media only screen and (max-width: 1350px) {
                width: 30%;
                left: -80px;
                top: 0px;
            }
            @media only screen and (max-width: 960px) {
                width: 35%;
                left: -62px;
                top: 0px;
            }
            @media only screen and (max-width: 768px) {
                width: 35%;
                left: -38px;
                top: 0px;
            }
            @media only screen and (max-width: 525px){
                width: 35%;
                left: -38px;
                top: 0px;
            }
            @media only screen and (max-width: 425px){
                width: 35%;
                left: -38px;
                top: 0px;
            }
            @media only screen and (max-width: 375px){
                width: 40%;
                left: -38px;
                top: 0px;
            }
        }
        @media only screen and (max-width: 1440px) and (min-width: 1350px){
            width: 720px;
        }
        @media only screen and (max-width: 1350px){
            width: 600px;
            height: 650px;
        }
        @media only screen and (max-width: 960px) {
                width: 50vw;
                height: 55vh;
                top: 0px;
            }
        @media only screen and (max-width: 768px) {
                width: 50vw;
                height: 417px;
                top: 0px;
            }
        @media only screen and (max-width: 525px) {
                width: 50vw;
                height: 417px;
                top: 0px;
            }
        @media only screen and (max-width: 425px){
                width: 50vw;
                height: 430px;
                top: 0px;
            }
        @media only screen and (max-width: 375px){
                width: 50vw;
                height: 400px;
                top: 0px;
            }
        @media only screen and (max-width: 320px){
                width: 50vw;
                height: 417px;
                top: 0px;
            }
    }
`;


export default Accueil;