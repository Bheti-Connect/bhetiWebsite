import React from 'react'
import styled from 'styled-components'
import Button from '../Button';
import { useTheme } from '../../context/themeContext';


const Accueil = () => {
    const theme = useTheme();
    return (
        <AccueilStyled className='u-pad-lg-2'  theme={theme}>
            <div className='first-container'>
                <div className='headache'>
                    <h1 className='centered mobile-view'><b>Résolvez le casse tête du financement de votre entreprise</b></h1>
                    <div className='text-highlighted'>
                        <p> Ut enim ad minim veniam, quis nostrud  commodo consequat. 
                        Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
                
                <div className='button-demo'>
                        <Button 
                            name={'Je réserve une demo'}
                            icon={'fas fa-chevron-right'}
                            arrow={'arrow'}
                            blob={'blob'}
                        />
                    </div>
                
            </div>
        </AccueilStyled>
    )
}

const AccueilStyled = styled.section`
        .first-container{
        .headache {
            display: flex;
            position: relative;
            margin: auto;
            margin-top: 2%;
            align-items: center;
            border-radius: 7px;
            @media only screen and (max-width: 1440px){
                width: 1000px;
                margin-left: -12vw ;
            }
            img{
                width: 70%;
            }
            .centered{    
                position: relative;
                margin: auto;
                font-weight: 900;
                font-size: 40px; 
                font-family: 'cinzel'   ;
                color: ${props => props.theme.colorBlack}; 
                @media only screen and (max-width: 2560px) {
                    top: 10vh;
                    font-size: 50px;
                    width: 30vw;
                }
                @media only screen and (max-width: 1440px){
                    width: 500px;
                    font-size: 45px; 
                }
                @media only screen and (max-width: 1350px) and (min-width: 1024px) {
                    width: 600px;
                    font-size: 40px; 
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
                
                @media only screen and (max-width: 425px){
                    display: none;
                }
                @media only screen and (max-width: 375px){
                    width: 300px;
                    text-align: center;
                    font-size: 31.3px;
                    transform: translate(-60%, 190%);
                    color: ${props => props.theme.colorBlack};
                }
            }
            .mobile-view {
                @media only screen and (max-width: 440px){
                    display: block;
                    width: 360px;
                    font-size: 31px;
                    transform: translate(-58%, 140%);
                    color: ${props => props.theme.colorBlack};
                }
                @media only screen and (max-width: 425px){
                    display: block;
                    width: 360px;
                    font-size: 31px;
                    transform: translate(-64%, 135%);
                    color: ${props => props.theme.colorBlack};
                }
                @media only screen and (max-width: 415px){
                    transform: translate(-60%, 135%);
                }
                @media only screen and (max-width: 375px){
                    display: block;
                    width: 350px;
                    font-size: 30px;
                    transform: translate(-57%, 145%);
                    color: ${props => props.theme.colorBlack};
                }
            }
        }
        .text-highlighted{
            @media only screen and (max-width: 2500px){
                text-align: center;
                padding-top: 13vh;
                width: 500px;
                margin: auto;
            }
            @media only screen and (max-width: 1440px) {
                font-size: 20px;
            }
            @media only screen and (max-width: 1350px) {
                margin-top: 8%;
                font-size: 1.3rem;
                width: 300px;
                margin-left: 30px;
            }
            @media only screen and (max-width: 960px) {
                margin-top: 12%;
                font-size: 1.25rem;
                width: 600px;
                margin-top: 200px;
                margin-left: -20vw;
            }
            @media only screen and (max-width: 768px) {
                margin-top: 10%;
                font-size: 1.01rem;
                width: 320px;
                margin-top: 200px;
                margin-left: -80px;
            }
            @media only screen and (max-width: 525px) {
                margin-top: 10%;
                font-size: 1.01rem;
                text-align: justify;
                width: 350px;
                margin-top: 160px;
                margin-left: -90px;
            }
            @media only screen and (max-width: 375px) {
                width: 300px;
                margin-top: 200px;
                margin-left: -70px;
            }
        }
        .button-demo{
            position: relative;
            @media only screen and (max-width: 2500px){
                top: 15vh;
                margin: auto;
                padding-bottom: 10% ;
            }
            @media only screen and (max-width: 1440px){
                margin-top: 30px ;
            }
            @media only screen and (max-width: 500px){
                width:100%;
                margin: 0px -20px;
                padding-top: 20px ;
            }
            @media only screen and (max-width: 425px){
                width:110%;
                margin: 0px -25px;
                padding-top: 15px ;
            }
            @media only screen and (max-width: 375px){
                width:125%;
                margin: 0px -80px;
                padding-top: 15px ;
            }
        }
        @media only screen and (max-width: 1440px) {
            position: relative;

        }
        @media only screen and (max-width: 768px) {
            width: 220px;
            margin-left: 130px;
        }
        @media only screen and (max-width: 500px) {
            width: 250px;
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
    
`;


export default Accueil;