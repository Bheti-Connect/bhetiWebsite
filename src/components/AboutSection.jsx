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
    display: block;
    background-color: ${props => props.theme.colorBlack};
    padding-top: 2vh;
    .upper-container{
        width: 60vw;
        margin: 40px auto;

        .title{
            margin: 20px 0px;
            color: ${props =>props.theme.colorWhite};
            font-size: 2.3rem;
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