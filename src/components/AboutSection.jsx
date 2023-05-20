import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import bhetiImage from '../assets/images/pexels-christina-morillo-1181421.jpg';
import Button from "./Button";
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const theme = useTheme();

    return (
        <AboutSectionStyled  theme={theme}>
            <div className='lower-container'>
                <div className='leftSide'>
                    <h3 className='title'>
                        Développez et financez vos projets
                    </h3>
                    <p className='subtitle-text'>Grâce à la plateforme Bheti App, accédez à un écosystème composé d’experts, d’outils et d’informations… Bref, tout ce qu’il vous faut pour trouver du financement.</p>
                    <div className='steps'>
                        <div className='each-step'>
                            <p>1. Publiez votre projet,</p>
                            <p>2. Précisez votre besoin,</p>
                            <p>3. Augmentez la visibilité de votre projet auprès d’investisseurs</p>
                        </div>
                    </div>
                    <div className='test-button'>
                        <Link
                            to={'/waitlist'}
                        > 
                            <Button
                                name='Tester Bheti App'
                                icon={'fas fa-chevron-right'}
                                arrow={'arrow'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
                <div className='rightSide'>
                        <img src={bhetiImage} className='about-img' alt='bheti-image' />
                </div>
        </AboutSectionStyled>
        )
}

const AboutSectionStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    background-color: ${props => props.theme.colorBlack};
    margin-bottom: 6rem;
    box-shadow: 0 5px 18px #212529b7;
    @media only screen and (min-width: 960px){
        margin-top: -1rem;
    }
    @media only screen and (max-width: 960px){
        margin-top: -1.3rem;
    }
    .lower-container{
        display: flex;
        position: relative;
        width:90%;
        margin: 5% 10%;
        .leftSide{
            position: relative;
            margin: 5% 0%;
            width: 100%;
            .title{
                color: ${props => props.theme.colorWhite};
                font-size: 2.45vw;
                text-align: left;
                width: 100%;
                &::after{
                    content: '';
                    position: absolute;
                    left: 0;
                    width: 23%;
                    height: 2px;
                    background-color: ${props => props.theme.colorAccent};
                    @media all and (max-width: 500px){
                        bottom: 80%;
                        width: 40%;
                    }
                    @media all and (max-width: 500px){
                        bottom: 80%;
                        width: 40%;
                    }
                }
                @media all and (max-width: 768px) {
                    font-size: 2rem;
                }
                @media all and (max-width: 500px){
                    font-size: 1.45rem;
                    margin-bottom: 0.9rem;
                }
            }
            .subtitle-text{
                font-family:'Montserrat', sans-serif;
                color: ${props => props.theme.colorGrey4};
                margin: 5% 0;
                line-height: 1.45;
                width: 99%;
                @media all and (max-width: 500px) {
                    font-size: .85em;
                    line-height: 1.34;
                    width: 100%;
                    text-align: left;
                }
            }
            .steps{
                position: relative;
                margin: 4% 0;
                .each-step{
                    list-style: none;
                    p{ 
                        font-family:'Montserrat', sans-serif;
                        color: ${props => props.theme.colorGrey4};
                        font-size: 1.12rem;
                        line-height: 1.6;
                    }
                }
                @media all and (max-width: 500px) {
                    text-align: left;
                    .each-step{
                        p{
                            font-size: .85em;
                            line-height: 1.3;
                        }
                    }
                }
            }
            @media all and (max-width: 500px) {
                width: 120% !important;
            }
        } 

    @media only screen and (max-width: 1150px){
        display: block;
        width: 70%;
        .leftSide{
            position: relative;
            width: 100%;
            .inner-container{
                position: relative;
                width: 100%;
                margin: auto;
            }
        }
}
    }
    .rightSide{
        overflow: hidden;
        img{
            width: 100%;
            object-fit: cover;
            height: 100%;
            filter: grayscale(100%);
            transition: all .3s ease-in-out;
            &:hover{
                filter: grayscale(0);
                transform: scale(1.2) rotate(4deg);
            }
            @media only  screen and (max-width: 320px) {
                width: 100%;
            }
        }
    }
    @media only screen and (max-width: 768px) {
        display: inline-block;
    }
`;

export default AboutSection