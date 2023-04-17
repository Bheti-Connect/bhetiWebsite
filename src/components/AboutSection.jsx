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
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    text-align: center;
    padding-top: 10rem !important;
    @media only screen and (max-width: 2560px) and (min-width: 1800px) {
            height: 800px;
        }
    @media only screen and (max-width: 1800px) and (min-width: 1440px) {
            height: 800px;
        }
    .left-about{
        width: 90%;
        margin-left: 10%;
       
        h3{
            color: ${props => props.theme.colorWhite};
        }
        h4{
            width: 50%;
            color: ${props => props.theme.colorWhiteIsh};
        }
        p{
            padding: 1.5rem 0;
            font-size: 17.7px;
            color: ${props => props.theme.colorGrey5};
            @media only screen and (max-width: 525px) and (min-width: 425px){
                padding: 1rem 0;
                font-size: 14px;
                margin-left: 35px;
            }
        }
        
        .title{
            /*margin-left: 10%;*/
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
                width: 600px;
                margin-bottom: 6%;
                margin-top: -20%;
                margin-left: 16vw;
            }
            @media only screen and (max-width: 960px){
                font-size: 1.9rem;
                margin-bottom: 8%;
                margin-top: -25%;
                margin-left: 60px;
            }
            @media only screen and (max-width: 768px){
                font-size: 1.9rem;
                margin-bottom: 5%;
                margin-top: -10%;
                margin-left: 50px;
            }
/* 
            @media only screen and (max-width: 600px){
                font-size: 1.9rem;
                margin-bottom: 5%;
                margin-top: -10%;
                width: 150px;
            }
*/
            @media only screen and (max-width: 425px){
                font-size: 1.2rem;
                margin-bottom: 5%;
                margin-top: -2900%;
                width: 350px;
                margin-left: -2px;
            }
            @media only screen and (max-width: 375px){
                font-size: 1.2rem;
                margin-bottom: 5%;
                margin-top: -2900%;
                width: 350px;
                margin-left: -2px;
            }
            @media only screen and (max-width: 320px){
                font-size: 1.3rem;
                width: 220px;
                margin-left: 50px;
            }
        }
        .sub_div{
            margin: 100px 0;
            text-align: left;
            width: 90%;
            .subTittle_elements{
                .sub{
                    font-size: 30px;
                    font-family: sans-serif;
                    color: ${props => props.theme.colorWhite};
                }
            }
        }
        .about-info{
            .about-info-item{
                display: grid;
                grid-template-columns: 120px auto;
                margin-bottom: 1.5rem;
                p{
                    padding: .7rem 0;
                }
                h5{
                    font-size: 1.3rem;
                    color: ${props => props.theme.colorWhite};
                    @media only screen and (max-width: 525px) and (min-width: 425px){
                        font-size: 16.3px;
                        margin-top: 30px;
                    }
                    @media only screen and (max-width: 425px){
                        display: none;
                    }
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
                    @media only screen and (max-width: 2560px) and (min-width: 1800px){
                        padding-bottom: 10%;
                    }
                    @media only screen and (max-width: 1800px) and (min-width: 1440px){
                        padding-bottom: 10%;
                    }
                    @media only screen and (max-width: 768px) {
                        width: 500px;
                    }
                    @media only screen and (max-width: 425px){
                        font-size: 15px;
                        width: 250px;
                        margin-left: -50px;
                    }
                    @media only screen and (max-width: 320px){
                        font-size: 12.1px;
                        width: 200px;
                        margin-left: -50px;
                    }
                }
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    margin-top: 70px;
                }
                @media only screen and (max-width: 2560px) {
                    margin-left: 80px;
                }
                @media only screen and (max-width: 1024px) {
                    width: 650px;
                    margin-left: 15%;
                    .icon {
                        width: 70px;
                        height: 65px;
                        margin-top: 30%;
                        .project-img{
                            width: 60px;
                            margin-top: 10%;
                        }
                    }
                }
                @media only screen and (max-width: 960px) {
                    width: 600px;
                    margin-left: 70px;
                }
                @media only screen and (max-width: 768px) {
                    width: 400px;
                    margin-left: 10px;
                }
                @media only screen and (max-width: 425px) {
                    width: 300px;
                }
                @media only screen and (max-width: 320px) {
                    width: 280px;
                }

                @media only screen and (max-width: 525px) and (min-width: 425px) {
                    .icon {
                        width: 50px;
                        height: 55px;
                        margin-top: 30%;
                        .project-img{
                            width: 40px;
                            margin-top: 10%;
                        }
                    }
                    .text-container {
                        display: contents;
                    }
                }
                @media only screen and (max-width: 425px){
                    .icon{
                        width: 50px;
                        height: 55px;
                        margin-top: 30%;
                        .project-img{
                            width: 40px;
                            margin-top: 10%;
                        }
                    }
                    .text-container {
                        margin-top: 10%;
                        display: contents;
                    }
                }
            }
        }
        @media only screen and (max-width: 2560px) and (min-width: 1800px) {
            width: 100%;
            bottom: 5rem;

            h4{
                margin:auto;
                width: 90%;
            }

        }
        @media only screen and (max-width: 1800px) and (min-width: 1440px) {
            width: 100%;
            bottom: 5rem;
        }

        @media only screen and (max-width: 1440px){
            grid-template-columns: none;
            padding-top: 2rem !important;

            h4{
                width: 100%;
                margin: auto;
                text-align: center;
                margin-right: -60px;
            }

            .sub_div{
                .subTittle_elements{
                    .sub{
                        font-size: 20px;
                    }
            }
        }
        }

        @media screen and (max-width: 376px) {
                width: 330px;
                margin-left: 5%;
	            }
        @media only screen and (max-width: 768px){
            width: 100%;
            bottom: 5rem;
        }
        h4{
            color: ${props =>props.theme.colorGrey5};
        }
    }
    .lower-container{
        display: flex;
        position: relative;
        width: 90%;
        margin: auto;
        .leftSide{
            position: relative;
            width: 50%;
            .inner-container{
                background-color: ${props =>props.theme.colorBg};
                align-items: flex-start;
                position: relative;
                width: 80%;
                margin: 30% auto;
                padding: 100px 50px;
            }
        }
        .rightSide{
            position: relative;
            .image-div{
                width: 20%;
                margin: 120px auto;
                .about-img{
                    width: 25vw;
                    height: 35vw;
                }
            }
        }
}
`;

export default AboutSection