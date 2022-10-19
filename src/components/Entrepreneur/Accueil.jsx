import React from 'react'
import styled from 'styled-components'
import Talking from '../../assets/images/pexels-picha-stock-3894383-1.png';
import Button from '../Button';
import { useTheme } from '../../context/themeContext';


const Accueil = () => {
    const theme = useTheme();
    return (
        <AccueilStyled className='u-pad-lg-2'  theme={theme}>
            <div className='first-container'>
                <div className='headache'>
                    <h1 className='centered'>Résolvez le casse tête du financement de votre entreprise</h1>
                    <img className='illustration-1' src={Talking} alt='Image-Femmes'/>
                    <div className='button-demo'>
                        <Button 
                            name={'Je réserve une demo'}
                            icon={'fas fa-chevron-right'}
                            arrow={'arrow'}
                            blob={'blob'}
                        />
                    </div>
                </div>
                <div className='text-highlighted'>
                    <p>Convaincre un investisseur, obtenir des financements, faire une levée de fonds … Autant de choses qui vous paraissent insolubles?</p>
                    <p>En plus de nos outils prisés par les experts du monde des startups, bénéficiez de l’accompagnement de nos meilleurs conseillers.</p>
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
            .illustration-1{
                border-bottom-left-radius: 40px;
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    margin-left: 400px;
                    width: 50%;
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
                    transform: translate(-120%, -50%);
                }
            }
            .button-demo{
                margin: 20px 450px 10px ;
            }
        }
        .text-highlighted{
            align-items: center;
            margin-top: 2%;
        }
    }
`;


export default Accueil