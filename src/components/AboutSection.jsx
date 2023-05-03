import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import bhetiImage from '../assets/images/bheti-img.jpg';
import aboutImage from '../assets/images/about.png';
import Button from "./Button";

const AboutSection = () => {
    const theme = useTheme();

    return (
        <AboutSectionStyled  theme={theme}>
            <div className='upper-container'>
                <h3 className='title'>
                    Développez et financez vos projets
                </h3>
                <p>Grâce à la plateforme Bheti App, accédez à un écosystème composé d’experts, d’outils et d’informations… Bref, tout ce qu’il vous faut pour trouver du financement.</p>
                <div className='test-button'>
                        <Button
                            name='Tester Bheti App'
                            arrow={'arrow'}
                            icon={'fas fa-arrow-right'}
                        />
                </div>
            </div>
            <div className='lower-container'>
                <div className='leftSide'>
                    <div className='inner-container'>
                        <img src={aboutImage} className='about-text' alt='about-text-image' />
                    </div>
                </div>
                <div className='rightSide'>
                    <div className='image-div'>
                        <img src={bhetiImage} className='about-img' alt='bheti-image' />
                    </div>
                </div>
            </div>
        </AboutSectionStyled>
        )
}

const AboutSectionStyled = styled.section`
    display: grid;
    background: ${props => props.theme.colorBlack};
    grid-template-columns: auto;
    grid-gap: 0.5rem;
    text-align: center;
    .upper-container{
        display : flex;
        width: 45%;
        margin-top:50px;
        margin-left: 10%;
        align-items: left;
        flex-direction : column;
        position : relative;
        p{
            color: ${props => props.theme.colorGrey5};
            width: 100%;
            @media only screen and (max-width: 768px){
                font-size: 18px;
            }
            @media only screen and (max-width: 600px){
                font-size: 15px;
            }
            text-align: left;
        }
        .test-button{
            margin: 20px 0px;
            width: 30%;
            position : relative;
            @media only screen and (max-width: 1490px){
                width: 35%;

            }
            @media only screen and (max-width: 600px){
                margin:20px  auto;
                left: 20vw;
                width: 50%;
            }
            @media only screen and (max-width: 420px){
                width: 60%;
                left: 15vw;
            }
        }
        .title{
            color: ${props => props.theme.colorWhite};
            margin-bottom: 3%;
            font-size: 1.9rem;
            @media only screen and (max-width: 2560px){
                text-align: left;
                font-size: 2.9rem;
            }
            @media only screen and (max-width: 1800px){
                font-size: 2.8rem;
                margin-bottom: 3%;
            }
            @media only screen and (max-width: 1440px){
                font-size: 2.1rem;
                margin-bottom: 4%;
            }
            @media only screen and (max-width: 1350px){
                font-size: 2rem;
                margin-bottom: 9%;
            }
            @media only screen and (max-width: 1024px){
                font-size: 1.9rem;
                width: 100%;
                margin-bottom: 6%;
                margin-left: 0;
            }
            @media only screen and (max-width: 960px){
                font-size: 1.9rem;
                margin: 0 0 8% 0;
            }
            @media only screen and (max-width: 768px){
                font-size: 1.8rem;
                margin-bottom: 8%;
                width: 100% !important;
                margin-left: 0;
            }

            @media only screen and (max-width: 600px){
                font-size: 1.9rem;
                margin-bottom: 5%;
                margin-top: 10% !important;
                width: 100% !important;
                margin-left: 0;
            }

            @media only screen and (max-width: 425px){
                font-size: 1.2rem;
                margin-bottom: 5%;
                margin-top: -2900%;
                width: 100% !important;
            }
            @media only screen and (max-width: 375px){
                font-size: 1.2rem;
                margin-bottom: 10% !important;
                width: 100% !important;
                margin:auto;
            }
            @media only screen and (max-width: 320px){
                font-size: 1.3rem;
                width: 100% !important;
                margin-bottom: 10% !important;
                margin:auto;
            }
        }
        @media only screen and (max-width: 600px){
            margin-top:20px;
            width: 85%;
        }
    }
    .lower-container{
        display: flex;
        position: relative;
        width: 80%;
        margin: 5% auto;
        gap : 20px;
        .leftSide{
            position: relative;
            width: 80%;
            .inner-container{
                align-items: flex-start;
                position: relative;
                width: 100%;
                text-align: center;
                .about-text{
                    position: relative; 
                    width: 36vw;
                    height: 100%;
                    box-shadow: 12px 12px 2px 1px #540000;
                    border-radius : 15px;
            }
                @media only screen and (min-width: 1350px){
                    width: 100%;
                    height: 100%;
                    text-align: left;
                }
                @media only screen and (max-width: 1350px){
                    width: 100%;
                    height: 100%;
                    text-align: left;   
                    h2{
                        margin: 20% auto;
                        width: 95%;
                    }
                }
                @media only screen and (max-width: 600px){
                    font-size: 15px;
                }
                @media only screen and (max-width: 400px){
                    text-align: left;
                    font-size: 10px;
                }
            }
        } 
        .rightSide{
            position: relative;
            .image-div{
                
                .about-img{
                    position: relative; 
                    width: 36vw;
                    height: 100%;
                    border-radius : 15px;
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

                .about-text{
                    position: relative; 
                    width: 70vw;
                    height: 100%;
                    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
            }
            }
        }

        .rightSide{
            position: relative;
            .image-div{
                .about-img{
                    width: 70vw;
                    border-radius : 15px;
            }
        }

    }
}
    }
`;

export default AboutSection