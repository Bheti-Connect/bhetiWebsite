import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import premiereImg from '../assets/images/ent-img1.jpg';
import deuxiemeImg from '../assets/images/ent-img4-2.jpg';
import Button from './Button';
import { devices } from '../data/Responsive';

const Header = () => {
    const theme = useTheme()
    return (
        <HeaderStyled theme={theme}>
            
            <div className='header-content u-pad-lg'>
                <div className='left-h-content'>
                    <h2>
                        Chez nous<span> LES BONS PROJETS</span> se voient être réalisé à 100%
                    </h2>
                    <p>
                        Bheti Connect est la platforme numéro une qui réunnis les entrepreneurs et investisseurs en Afrique francophone.
                    </p>
                    <a href='https://airtable.com/shrr2JCtuBUkjXoKz' className='button-demo'>
                        <Button 
                            name={'Je réserve une demo'}
                            icon={'fas fa-chevron-right'}
                            arrow={'arrow'}
                            blob={'blob'}
                        />
                    </a>
                </div>
                <div className='right-h-content'>
                    <img className='h-img-1' src={premiereImg} alt='image-1' />
                    <img className='h-img-2' src={deuxiemeImg} alt='image-2' />
                </div>
            </div>
            <div className='mouse'>
                <span></span>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    height: 85vh;
    position: relative;
    @media only screen and (max-width: 2560px) and (min-width: 1800px){
        height: 84vh;
    }
    @media only screen and (max-width: 1800px) and (min-width: 1440px){
        height: 75vh;
    }
    
    .u-pad-lg{
        @media only screen and (max-width: 376px) {
                    padding: 0rem 0rem;
                }
        }
    .header-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;

        .left-h-content{
            animation: contentHide 1s ease-in-out;
            @keyframes contentHide {
                0%{
                    opacity: 0;
                    transform: translateX(-120%) scaleX(0);
                }
                100%{
                    opacity: 1;
                    transform: translateX(0) scaleX(1);
                }
            }
            h2{
                font-size: 2.4rem;
                font-weight: 800;
                font-family: 'Cinzel', serif;
                span{
                    background:${props => props.theme.colorGradientPrimary2};
                    background-clip: text;
                    font-family: 'Cinzel', serif;
                    -webkit-background-clip: text;
                    color: transparent;
                }
                @media only screen and (max-width: 376px){
                    font-size: 1.9rem;
                    margin-top: 10%;
                    margin-left: 4%;
                }
            }
            p{
                font-size: 1.1rem;
                line-height: 1.6rem;
                padding: 2rem 0;
                @media only screen and (max-width: 376px){
                    margin-left: 6%;
                    margin-right: 6%;
                    text-align: justify;
                }
            }
            @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    margin-top: 1%;
                    width: 750px;
                    height: 550px;
                    h2{
                        font-size: 54px;
                    }
                    p{
                        font-size: 21px;
                    }
                    .button-demo{
                        width: 200%;
                    }
                }
            @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    margin-top: 1%;
                    width: 600px;
                    height: 500px;
                    h2{
                        font-size: 50px;
                    }
                    p{
                        font-size: 19px;
                    }
                    .button-demo{
                        width: 100%;
                    }
            }
            @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    margin-top: 4%;
                    width: 600px;
                    h2{
                        font-size: 49px;
                    }
                    p{
                        font-size: 19px;
                    }
                    
            }
            @media only screen and (max-width: 1350px) and (min-width: 1250px) {
                    margin-top: 4%;
                    width: 600px;
                    h2{
                        font-size: 49px;
                    }
                    p{
                        font-size: 19px;
                    }
                    
            }
            @media only screen and (max-width: 1250px) and (min-width: 1024px) {
                    margin-top: 4%;
                    width: 500px;
                    h2{
                        font-size: 45px;
                    }
                    p{
                        font-size: 19px;
                    }
                    
            }
            @media only screen and (max-width: 376px){
                float: left;
                width: 200%;
            }
            .button-demo{
                margin-left: 20%;
            }
            @media only screen and (max-width: 1800px) and (min-width: 1440px){
                margin-left: -80px;
            }
            @media only screen and (max-width: 1440px) and (min-width: 1024px){
                margin-left: -70px;
            }
        }
        .right-h-content{
            position: relative;
            transition: all .4s ease-in-out;
            animation: contentHide2 1s ease-in-out;
            animation-delay: .5s;
            opacity: 0;
            animation-fill-mode: forwards;
            @keyframes contentHide2 {
                0%{
                    opacity: 0;
                    transform: translateY(-120%) scale(0);
                    visibility: none;
                }
                100%{
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    visibility: visible;
                }
            }
            &:hover{
                .h-img-2{
                    transform: scale(0.9);
                }
                .h-img-1{
                    transform: scale(1.1);
                }
            }
            .h-img-2{
                position: relative;
                width: 300px;
                height: 400px;
                object-fit: cover;
                left: 5%;
                top: 0%;
                border-bottom-right-radius: 5px;
                border-bottom-left-radius: 70px;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
                transition: all .4s ease-in-out;
                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    width: 360px;
                    height: 460px;
                }
                @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    width: 330px;
                    height: 410px;
                }
                @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    width: 280px;
                    height: 380px;
                }
                @media only screen and (max-width: 1350px) and (min-width: 1024px) {
                    width: 280px;
                    height: 380px;
                }
                @media only screen and (max-width: 1250px) and (min-width: 1020px){
                    width: 280px;
                    height: 360px;
                }
                @media only screen and (max-width: 376px){
                    position: absolute;
                    border-bottom-right-radius: 30%;
                    border-bottom-left-radius: 5px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    width:150px;
                    height: 200px;
                    top: 100%;
                    left: 10%;
                    left: 5%;
                }
            }
            .h-img-1{
                position: absolute;
                width: 350px;
                height: 500px;
                object-fit: cover;
                top: -15%;
                left: 40%;
                border-bottom-right-radius: 70px;
                border-bottom-left-radius: 5px;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                transition: all .4s ease-in-out;

                @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    width: 400px;
                    height: 600px;
                }
                @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    top: -10%;
                    width: 340px;
                    height: 520px;
                }
                @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    top: -10%;
                    margin-left: 40px;
                    width: 280px;
                    height: 450px;
                }
                @media only screen and (max-width: 1350px) and (min-width: 1250px) {
                    top: -9%;
                    width: 300px;
                    height: 480px;
                }
                @media only screen and (max-width: 1250px) and (min-width: 1024px){
                    top: -10%;
                    width: 300px;
                    height: 450px;
                }
                @media only screen and (max-width: 376px){
                    position: absolute;
                    border-bottom-left-radius: 30%;
                    border-bottom-right-radius: 0px ;
                    width:150px;
                    height: 250px;
                    top: 110%;
                    left: -90%;
            }
                
            }
            @media only screen and (max-width: 376px){
                float: left;
            }
            @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                margin-left: 55px;
            }
        }
        @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    margin-top: 3%;
                }
        @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    margin-top: 1%;
                }
        @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                margin-left: -10px; 
            }
        @media only screen and (max-width: 1350px) and (min-width: 1250px) {
                margin-left: -30px; 
            }
        @media only screen and (max-width: 1250px) and (min-width: 1024px) {
                margin-left: -50px; 
            }
        @media only screen and (max-width: 376px) {
                    margin-left: auto;
                    margin-right: auto;
                    width: auto;
                    height: auto;
                }
    }
    .mouse{
        position: absolute;
        bottom: 3%;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 45px;
        border-radius: 30px;
        border: 2px solid ${props => props.theme.colorBlack};
        pointer-events: none;
        span {
            position: absolute;
            left: 50%;
            top: 50%;
            height: 6px;
            width: 6px;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: ${props => props.theme.colorGradientPrimary3};
            animation: upDown 1s infinite;
            @keyframes upDown {
                0%{
                    transform: translateY(-13px) translateX(-50%) scale(1.3);
                }
                10%{
                    transform: translateY(-13px) translateX(-50%) scale(1.3);
                }
                50%{
                    transform: translateY(10px) translateX(-50%) scale(1);
                }
                100%{
                    transform: translateY(-13px) translateX(-50%) scale(1.3);
                }
            }
        }
        @media only screen and (max-width: 2560px) and (min-width: 1800px){
                    margin-bottom: 2%;
            }
        @media only screen and (max-width: 1800px) and (min-width: 1440px){
                    margin-bottom: 3%;
            }
        @media only screen and (max-width: 376px) {
                    margin-bottom: 50%;
                }
    }


`;

export default Header