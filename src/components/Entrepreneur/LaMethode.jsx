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
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.colorBlack};
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-top: 18rem;
    padding-top: 5rem !important;
    padding-top: 1rem;
    padding-left: 18rem;
    padding-right: 18rem;
    padding-bottom: 6rem;
    @media only screen and (max-width: 768px){
        padding-top: 0rem;
        padding-left: 1rem;
        padding-right: 15rem;
        padding-bottom: 0rem;
        }
    .top-container{
        position: relative;
        margin: auto;
        h3{
            color: ${props => props.theme.colorWhite};
        }
        p{
            padding: 1.2rem 0;
        }
        .title{
            font-size: 2.3rem;
            margin-bottom: 40px;
        } 
        .text-container{
            h5{
                color: ${props => props.theme.colorWhite};
            }
            @media all and (max-width: 2500px) {
                font-size: 19px;
                h5{
                    font-size: 21px;
                }
            }
            @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                font-size: 20px;
                h5{
                    font-size: 22px;
                }
            }
        }
        @media only screen and (max-width: 525px){
            width: 250px;
            font-size: 16px;
                h5{
                    font-size: 10px;
                }
                p {
                    font-size: 17px;
                }
                .title{
                    font-size: 2rem;
                    width: 70vw;
                    margin-left: 10vw;
                }
                margin-left: -250px;
        }
        //Left-Container Responsive Design
        @media all and (max-width: 2500px){
            position: relative;
            width: 60vw;
            margin: 0 auto;
        }
        @media all and (max-width: 1800px){
        }
        @media all and (max-width: 1500px){
        }
        @media all and (max-width: 1300px){
            width: 400px;
            margin-left: -5vw;
        }
        @media all and (max-width: 1080px){
            width: 400px;
            margin-left: -180px;
        }
        @media all and (max-width: 525px){
            width: 300px;
            margin-left: 50px;
            margin-top: -100px;
        }
        @media all and (max-width: 375px){
            width: 310px;
            margin-left: 30px;
        }
    }
    .bottom-container{
        display: flex; 
        grid-template-columns: 1fr 1fr; 
        grid-gap: 4px; 
        width: 120%;
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
        .neighbor-div{
            img{
                width: 100%;
            }
        }
        @media screen and (min-width: 1150px) {
                    width: 700px;
                    height: 300px;
                    margin-left: 5px;
                    margin-top: 25%;
	        }
        @media only screen and (max-width: 1440px) and (min-width: 1350px) {
            margin-top: 250px;
        }
        @media only screen and (max-width: 768px) {
            width: 200px;
            height: 500px;
        }
        @media only screen and (max-width: 525px) {
            visibility: hidden;
        }
    }
    @media all and (max-width: 2500px) {
        .bottom-container{
            width: 100%;
            margin-top: 20px;
            margin: auto;
        }
    }
    @media all and (max-width: 1800px) {
        .right-container{
            width: 140%;
            margin-top: 180px;
            margin-left: -10%;
        }
    }
    @media all and (max-width: 1500px) {
        .right-container{
            width: 140%;
            margin-top: 220px;
            margin-left: -2%;
        }
    }
    @media all and (max-width: 1300px) {
        .right-container{
            display: inline-block;
            width: 100%;
            margin-top: 20vh;
            margin-left: 10vw;
        }
    }
    @media all and (max-width: 1080px) {
        .right-container{
            width: 180%;
            margin-top: 150px;
            margin-left: 20%;
            .neighbor-div{
                img{
                    width: 100%;
                }
            }
        }
    }
    @media all and (max-width: 960px) {
        display: inline-block;
        .right-container{
            width: 110%;
            .neighbor-div{
                img{
                    width:100%;
                }
            }
        }
        .left-container{
            width: 120%;
            margin: auto;
            .text-container{
                width: 400px;
            }
        }
    }
    @media all and (max-width: 770px) {
        .right-container{
            position: relative;
            width: 150%;
            .neighbor-div{
                img{
                    width:100%;
                }
            }
        }

        .left-container{
            width: 120%;
            margin: auto;
        }
    }
    @media all and (max-width: 440px) {
        .left-container{
            width: 80%;
            .text-container {
                width: 320px;
            }
        }
        .right-container{
            width: 130%;
            height: 200px;
            margin-top: 200px;
            margin-left: -100px;
        }
    }
    @media all and (max-width: 380px) {
        .right-container{
            width: 130%;
            height: 200px;
            margin-top: 200px;
            margin-left: -100px;
        }
    }
    @media all and (max-width: 320px) {
        .left-container{
            width: 80%;
            .text-container {
                width: 270px;
            }
        }
    }
`;

export default LaMethode;