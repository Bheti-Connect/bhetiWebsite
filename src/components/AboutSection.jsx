import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import projectManagement from '../assets/images/analytics.png';
import bhetiImage from '../assets/images/bheti-img.jpg';
import giveMoney from '../assets/images/give-money.png'



const AboutSection = () => {
    const theme = useTheme();

    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Publiez votre projet, précisez votre besoin et augmentez la visibilité de votre projet auprès d’investisseurs."
        )

    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
                setTimeout(() => {
                    setText(text + fullText[index])
                    setIndex(index + 1)
                }, 40)
            }
        }, [index])
    return (
        <AboutSectionStyled  theme={theme}>
            <div className='upper-container'>
                <h3 className='title'>
                    Développez et financez vos projets
                </h3>
                <h4>Grâce à la plateforme BHC, accédez à un écosystème composé d’experts, d’outils et d’informations… Bref, tout ce qu’il vous faut pour trouver du financement.</h4>
            </div>
            <div className='lower-container'>
                <div className='leftSide'>
                    <div className='inner-container'>
                        <h2>{text}</h2>
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
    grid-gap: 1rem;
    text-align: center;
    .upper-container{
        width: 60%;
        margin: auto;
        margin-top:50px;
        h4{
            color: ${props => props.theme.colorWhite};
            width: 100%;
            @media only screen and (max-width: 2560px){
            
            }
            @media only screen and (max-width: 1800px){
          
            }
            @media only screen and (max-width: 1440px){
             
            }
            @media only screen and (max-width: 1350px){
           
            }
            @media only screen and (max-width: 1024px){
            
      
            }
            @media only screen and (max-width: 960px){
        
            }
            @media only screen and (max-width: 768px){
                font-size: 18px;
                
            }
            @media only screen and (max-width: 600px){
                font-size: 15px;
            }
        }
        .title{
            color: ${props => props.theme.colorWhite};
            margin-bottom: 3%;
            font-size: 1.6rem;
            @media only screen and (max-width: 2560px){
                font-size: 2.7rem;
            }
            @media only screen and (max-width: 1800px){
                font-size: 2.4rem;
                margin-bottom: 5%;
            }
            @media only screen and (max-width: 1440px){
                font-size: 2.1rem;
                margin-bottom: 9%;
            }
            @media only screen and (max-width: 1350px){
                font-size: 2rem;
                margin-bottom: 9%;
            }
            @media only screen and (max-width: 1024px){
                font-size: 1.9rem;
                width: 100%;
                margin-bottom: 6%;
                /*margin-top: -20%;*/
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
                /*margin-left: -2px;*/
            }
            @media only screen and (max-width: 375px){
                font-size: 1.2rem;
                margin-bottom: 10% !important;
                /*margin-top: -2900%;*/
                width: 100% !important;
                margin:auto;
                /*margin-left: -2px;*/
            }
            @media only screen and (max-width: 320px){
                font-size: 1.3rem;
                width: 100% !important;
                margin-bottom: 10% !important;
                margin:auto;
                /*margin-left: 50px;*/
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
        .leftSide{
            position: relative;
            width: 80%;
            .inner-container{
                background-color: ${props =>props.theme.colorBg};
                align-items: flex-start;
                position: relative;
                width: 100%;
                margin: auto;
                padding: 20px 50px;
                text-align: center;
                @media only screen and (min-width: 1350px){
                    width: 80%;
                    height: 100%;
                    text-align: left;
                    h2{
                        margin: 20% auto;
                        width: 95%;
                    }
                }
                @media only screen and (max-width: 1350px){
                    width: 80%;
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
                margin: auto;
                .about-img{
                    width: 35vw;
            }
        }
    } 

    @media only screen and (max-width: 1250px){
        display: block;
        width: 70%;
        .leftSide{
            position: relative;
            width: 100%;
            .inner-container{
                background-color: ${props =>props.theme.colorBg};
                position: relative;
                width: 100%;
                margin: auto;
            }
        }

        .rightSide{
            position: relative;
            .image-div{
                margin: 5% auto;
                .about-img{
                    width: 70vw;
            }
        }

    }
}
    }
`;

export default AboutSection