import React from 'react'
import styled from 'styled-components'
//import Team from '../../assets/images/pexels-edmond-dantès-8553867.jpg';
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
                    <div className='text-highlighted paragraph'>
                        <p>
                        Avec des données, des outils et des conseils, libérez le potentiel de votre entreprise en toute autonomie ou avec un accompagnement dédié de nos experts et 
                        obtenez les financements dont vous avez besoin pour faire décoller votre projet.
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
        height: 123vh ;
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
                width: 100%;
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
                    width: 60vw;
                    font-size: 60px;
                }
                @media only screen and (max-width: 1800px){
                    font-size: 55px;
                }
                @media only screen and (max-width: 1440px){
                    font-size: 45px;
                }
                @media only screen and (max-width: 1350px){
                    font-size: 40px; 
                }
                @media only screen and (max-width: 1024px) {
                    width: 74vw;
                    font-size: 38px; 
                }
                
                @media only screen and (max-width: 768px){
                    width: 70vw;
                    font-size: 30px;
                    color: ${props => props.theme.colorBlack}; 
                }
                
                @media only screen and (max-width: 440px){
                    font-size: 30px;
                }
            }
            .mobile-view {
                @media only screen and (max-width: 425px){
                    width: 80vw;
                    font-size: 1.8em;
                    margin: 0 auto;
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
                width:47vw;
                margin: auto;
                font-size: 20px;
                p{
                    color: ${props => props.theme.colorGrey6}
                }
            }
            @media only screen and (max-width: 1440px) {
                font-size: 20px;
            }
            @media only screen and (max-width: 1350px) {
                font-size: 1.25rem;
            }
            @media only screen and (max-width: 1024px) {
                font-size: 1.1rem;
            }
            @media only screen and (max-width: 768px){
                font-size: 1.01rem;
                width: 70vw;
                margin-top: 20px;
            }
            @media only screen and (max-width: 430px) {
                font-size: 1.02rem;
                position: relative;
                text-align: justify;
                width: 290px;
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
                margin-top: 40px ;
                padding-bottom: 5% ;
            }
            @media only screen and (max-width: 768px){
                width:100%;
            }
            @media only screen and (max-width: 500px){
                position: relative;
                width: 80%;
                margin: 20px  auto;
            }

            @media only screen and (max-width: 425px){
                position: relative;
                width: 100%;
                margin: 20px  auto;
            }
            @media only screen and (max-width: 375px){
                position: relative;
                width: 80%;
                margin: 20px  auto;
            }
        }

        @media only screen and (max-width: 1440px){
            position: relative;
        }
        @media only screen and (max-width: 768px) {
            width: 80vw;
            margin-left: 50px;
        }
        @media only screen and (max-width: 425px) {
            width: 80%;
        }
    }
    
`;

export default Accueil;