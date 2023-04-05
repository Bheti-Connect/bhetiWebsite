import React from 'react'
import styled from 'styled-components'
import Button from '../Button';
import { useTheme } from '../../context/themeContext';


const Accueil = () => {
    const theme = useTheme();
    return (
        <AccueilStyled  theme={theme}>
            <div className='first-container'>
                <div className='headache'>
                    <div className='centered mobile-view'>
                        <h1><b>Financer votre entreprise avec succès !</b></h1>
                    </div>
                    <div className='text-highlighted'>
                        <p>
                        Avec des données, des outils et des conseils, libérez le potentiel de votre entreprise en toute autonomie ou avec un accompagnement dédié de nos experts ! 
                        Obtenez les financements dont vous avez besoin pour faire décoller votre projet.
                        </p>
                    </div>
                </div>
                
                <div className='button-demo'>
                        <Button 
                            name={'🚀 Découvrir la plateforme'}
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
            display: block;
            position: relative;
            margin: auto;
            margin-top: 1%;
            align-items: center;
            border-radius: 7px;
            @media only screen and (max-width: 1440px){
                width: 1000px;
            }
            @media only screen and (max-width: 430px) {
                display: block;
                position: relative;
                width: 220px;
                height: 30vh;
            }
            @media only screen and (max-width: 425px) {
                display: block;
                position: relative;
                width: 220px;
                height: 28vh;
            }
            @media only screen and (max-width: 320px) {
                height: 32vh;
            }
            img{
                width: 70%;
            }
            .centered{    
                position: relative;
                margin: auto;
                font-weight: 900;
                font-size: 40px;
                color: ${props => props.theme.colorBlack};
                h1{
                    font-family: 'cinzel';
                }
                @media only screen and (max-width: 2560px) {
                    top: 10vh;
                    font-size: 50px;
                    width: 30vw;
                }
                @media only screen and (max-width: 1440px){
                    width: 100%;
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
                    font-size: 35px;
                    transform: translate(5%, 10%);
                    color: ${props => props.theme.colorBlack}; 
                }
            }
            .mobile-view {
                @media only screen and (max-width: 430px){
                    display: block;
                    width: 88vw;
                    top: 50px;
                    left: -15vw;
                    font-size: 33px;
                    color: ${props => props.theme.colorBlack};
                }
                @media only screen and (max-width: 425px){
                    display: block;
                    width: 80vw;
                    top: 25px;
                    left: -1vw;
                    font-size: 25px;
                    color: ${props => props.theme.colorBlack};
                }
                @media only screen and (max-width: 375px){
                    display: block;
                    left: 4vw;
                    font-size: 22px;
                    color: ${props => props.theme.colorBlack};
                }
                @media only screen and (max-width: 320px){
                    left: 8vw;
                    font-size: 20px;
                }
            }
        }
        .text-highlighted{
            @media only screen and (max-width: 2500px){
                text-align: center;
                padding-top: 13vh;
                width: 800px;
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
            @media only screen and (max-width: 768px) and (min-width: 430px) {
                margin-top: 10%;
                font-size: 1.01rem;
                width: 320px;
                margin-top: 200px;
            }
            @media only screen and (max-width: 430px) {
                font-size: 1.05rem;
                position: relative;
                text-align: justify;
                width: 300px;
                margin-top: -10px ;
                margin-left: -20px;
            }
            @media only screen and (max-width: 425px) {
                font-size: 1.02rem;
                text-align: justify;
                width: 350px;
                margin: auto;
            }
            @media only screen and (max-width: 375px) {
                position: relative;
                width: 290px;
                margin-left: 30px;
            }
            @media only screen and (max-width: 320px) {
                position: relative;
                width: 260px;
                margin-left: 40px;
            }
        }
        .button-demo{
            position: relative;
            @media only screen and (max-width: 2500px){
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
            @media only screen and (max-width: 430px){
                position: relative;
                width: 100%;
                margin-left: -40px;
            }
            @media only screen and (max-width: 425px){
                position: relative;
                width: 109%;
                margin: auto;
            }
            @media only screen and (max-width: 375px){
                position: relative;
                width: 107%;
                margin-left: -40px;
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
            width: 265px;
            display: block;
            margin: auto;
        }
    }
    
`;


export default Accueil;