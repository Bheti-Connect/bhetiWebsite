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
                        <ol>
                            <li>1. Publiez votre projet, </li>
                            <li>2. Précisez votre besoin,</li>
                            <li>3. Augmentez la visibilité de votre projet auprès d’investisseurs</li>
                        </ol>
                    </div>
                    <div className='test-button'>
                        <Link
                            to={'/formulaire'}
                        > 
                            <Button
                                name='Tester Bheti App'
                                arrow={'arrow'}
                                icon={'fas fa-arrow-right'}
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
                }
            }
            .subtitle-text{
                color: ${props => props.theme.colorGrey5};
                margin: 1% 0;
                width: 80%;
            }
            .steps{
                position: relative;
                margin: 4% 0;
                ol{
                    list-style: none;
                    li{ 
                        font-family:'Montserrat', sans-serif;
                        color: ${props => props.theme.colorGrey5};
                        font-size: 1.2rem;
                    }
                }
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
`;

export default AboutSection