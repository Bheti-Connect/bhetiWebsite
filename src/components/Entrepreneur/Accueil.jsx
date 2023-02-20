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
    @media only screen and (max-width: 440px) {
        height: 120vh ;
    }

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
            @media only screen and (max-width: 440px) {
                display: block;
                position: relative;
                width: 220px;
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
                
                @media only screen and (max-width: 440px){
                    width: 350px;
                    font-size: 40px;
                    transform: translate(-10%, 30%);
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
            .mobile-view {
                @media only screen and (max-width: 440px){
                    display: block;
                    position: absolute;
                    width: 80vw;
                    top: 20px;
                    left: -3vw;
                    font-size: 30px;
                    color: ${props => props.theme.colorBlack};
                }
                
                @media only screen and (max-width: 375px){
                    display: block;
                    position: absolute;
                    width: 80vw;
                    top: -12vw;
                    left: 40vw;
                    font-size: 20px;
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
            @media only screen and (max-width: 440px) {
                margin-top: 10%;
                font-size: 1.01rem;
                text-align: justify;
                width: 330px;
                padding-top: 100% ;
                margin-right: 0px;
                margin-left: -45px ;
            }
            @media only screen and (max-width: 375px) {
                margin-top: 10%;
                font-size: 1.01rem;
                text-align: justify;
                width: 320px;
                padding-top: 50% ;
                margin-top: 160px;
                margin: auto;
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
                width:105%;
                margin: 0px -50px;
                padding-top: -0px ;
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