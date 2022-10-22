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
                color: ${props => props.theme.colorBheti} ;
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
                    transform: translate(-150%, -90%);
                    width: 500px;
            }
            }
        }
        .text-highlighted{
            align-items: center;
            margin-top: 2%;
        }
        .button-demo{
            margin: 40px 500px 0px;
            @media only screen and (max-width: 1440px) and (min-width: 1350px){
                width: 80%;
                margin: 40px 350px 0px;
            }
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
            bottom: -160px;
            @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                width: 35%;
            }
        }
        .blobImg-2{
            position: absolute;
            right: -10px;
            top: -50px;
            @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                width: 20%;
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
        }
        @media only screen and (max-width: 1440px) and (min-width: 1350px){
            width: 720px;
        }
    }
`;


export default Accueil