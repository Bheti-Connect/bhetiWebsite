import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import vidOne from '../../assets/images/1st-action.gif';
import vidTwo from '../../assets/images/2nd-action.gif';
import vidThree from '../../assets/images/3rd-action.gif';

const LaMethode = () => {
    const theme = useTheme();
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Avec la plateforme Bheti Connect, Nous simplifions la manière de lever des fonds en Afrique"
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
        <LaMethodeStyled  theme={theme}>
            <div className='top-container'>
                <h3 className='title'>{text}</h3>
            </div>
            <div className='bottom-container'>
                <div className='child two-premier'>
                    <div className='div-one'>
                        <img src={vidOne} alt='Bheti-connect-base-illustration1' />
                    </div>
                    <div className='div-two'>
                        <img src={vidTwo}  alt='Bheti-connect-base-illustration2'/>
                    </div>
                </div>
                <div className='child neighbor-div'>
                    <img src={vidThree} alt='Bheti-connect-base-illustration3' />
                </div>
            </div>
        </LaMethodeStyled>
        )
}

const LaMethodeStyled = styled.section`
    display: block;
    position: relative;
    /* margin: auto;
    width: 80%; */
    height: 108vh;
    background: ${props => props.theme.colorBlack};
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-top: 18rem;
    .top-container{
        position: relative;
        margin: auto;
        width: 80vw;
        margin-top: 90px;
        h3{ 
            color: ${props => props.theme.colorWhite};
        }
        .title{
                    position: relative;
                    font-size: 2.3em;
                    width: 70vw;
                    margin: 10% auto 0px;
        } 
        @media all and (max-width: 2500px){
            position: relative;
            width: 80vw;
            margin: 0 auto;
            padding-top: 1px;
        }
        @media only screen and (max-width: 768px) {
            
        }
        @media only screen and (max-width: 768px){
                h5{
                    font-size: 10px;
                }
                p {
                    font-size: 17px;
                }
                .title{
                    font-size: 3.9vw;
                    width: 70vw;
                    margin: 5% auto;
                }
        }
        @media only screen and (max-width: 500px) {
            .title{
                    font-size: 4.3vw;
                    width: 80vw;
                    margin: 10% auto;
                }
        }
    }
    .bottom-container{
        display: flex; 
        grid-template-columns: 1fr 1fr; 
        grid-gap: 4px; 
        width: 70%;
        margin: 5% auto;
        .two-premier{
            margin-left:auto;
            margin-right:auto;
            height:auto; 
            width:auto;
            .div-one{
                img{
                    width: 100%;
                }
            }
            .div-two{
                img{
                    width: 100%;
                }
            }
        }
        .child{
            @media screen and (min-width: 768px) {
                width: 100vw;
            }
        }
        .neighbor-div{
            img{
                width: 104%;
            }
            @media only screen and (min-width: 1250px) {
                img{
                width: 103%;
                }
            }
            @media only screen and (max-width: 768px) {
                img{
                width: 100%;
                }
            }
        }
        @media only screen and (max-width: 1250px) {
            margin: 10% auto;
            width: 80vw;
        }
        @media only screen and (max-width: 768px) {
            position: relative;
            display: inline-block;
            width: 70%;
            margin: 0 auto;
        }
        @media only screen and (max-width: 500px) {
            margin: 10% auto;
        }
    }

    @media only screen and (max-width: 768px) {
        height: 100vh;
    }

`;

export default LaMethode;