import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import projectManagement from '../assets/images/analytics.png';
import bhetiImage from '../assets/images/bheti-img.jpg';
import giveMoney from '../assets/images/give-money.png'
import boxImg from '../assets/images/dots.png';

const AboutSection = () => {
    const theme = useTheme();
    return (
        <AboutSectionStyled className='u-pad-lg-2' theme={theme}>
            
            <div className='left-about'>
                <h3 className='title'>
                    Nos solutions pour les entrepreneurs
                </h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <div className='about-info'>
                    <div className='about-info-item'>
                        <div className='icon'>
                            <img src={projectManagement} className='project-img' alt='Project-Management' />
                        </div>
                        <div className='text-container'>
                            <h5>
                                Accompagnement pour la recherche de financement
                            </h5>
                            <p>
                            Nous vous proposons un accompagnement, sur mesure, qui permet de maitriser et optimiser votre recherche de financement. 
                            Grâce à un mix entre Intelligence Artificiel et expertise en financement de projet, nous offrons Bheti Connect Base, un outil clé en main, pour préparer votre levée de fonds et trouver des investisseurs.
                            </p>
                        </div>
                        <div className='icon'>
                            <img src={giveMoney} className='project-img' alt='Project-Management' />
                        </div>
                        <div className='text-container'>
                            <h5>
                                Trouvez le financement qui vous correspond
                            </h5>
                            <p>
                            Notre équipe d’expert en financement de projet analyse votre dossier et vérifie votre capacité à obtenir du financement. 
                            Nous identifions les investisseurs dont les critères de financement correspondent à votre projet pour vous fournir une liste exhaustive de solutions de financement adaptées à vos besoins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-about'>
                <img src={boxImg} className='box-img' alt='box-image' />
                <img src={bhetiImage} className='about-img' alt='bheti-image' />
            </div>
        
        </AboutSectionStyled>
        )
}

const AboutSectionStyled = styled.section`
    display: grid;
    background: ${props => props.theme.colorBlack};
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding-top: 10rem !important;
    .left-about{
        h3{
            color: ${props => props.theme.colorWhite};
        }
        p{
            padding: 1.5rem 0;
        }
        .title{
            font-size: 1.6rem;
        }
        .about-info{
            .about-info-item{
                display: grid;
                grid-template-columns: 120px auto;
                margin-bottom: 1.5rem;
                p{
                    padding:.6rem 0;
                }
                h5{
                    font-size: 1.3rem;
                    color: ${props => props.theme.colorWhite};
                }
                .icon{
                    background-color: ${props => props.theme.colorWhite};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    align-self: flex-start;
                    margin-right: 1rem;
                    padding: 1rem;
                    border-radius: 7px;
                    .project-img{
                        width: 60px;
                    }
                }
                .text-container p{
                    text-align: justify;
                    text-justify: inter-word;
                }
            }
        }
    }
    .right-about{
        position: relative;
        display: flex;
        justify-content: flex-end;
        .about-img{
            width: 90%;
            object-fit: cover;
            height: 500px;
            border-top-left-radius: 70px;
            border-bottom-right-radius: 70px;
            border-top-right-radius: 3px;
            border-bottom-left-radius: 3px;
            transition: all .3s ease-in-out;
            &:hover{
                transform: scale(1.05);
            }
        }
        .box-img{
            position: absolute;
            width: 80px;
            left: 3%;
            top: -8%;
            animation: scaleUp 8s infinite;
            @keyframes scaleUp {
                0%{
                    transform: scale(1);
                }
                50%{
                    transform: scale(1.2);
                }
                100%{
                    transform: scale(1);
                }
            }
        }
    }
`;

export default AboutSection