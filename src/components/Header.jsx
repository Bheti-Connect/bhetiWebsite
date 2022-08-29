import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import premiereImg from '../assets/images/ent-img1.jpg';
import deuxiemeImg from '../assets/images/ent-img4-2.jpg';
import Button from './Button';
import NavBar from './NavBar';

const Header = () => {
    const theme = useTheme()
    return (
        <HeaderStyled theme={theme}>
            <NavBar />
            <div className='header-content u-pad-lg'>
                <div className='left-h-content'>
                    <h2>
                        Chez nous<span> les bons projets</span> se voient être réalisé à 100%
                    </h2>
                    <p>
                        Bheti Connect est la platforme numéro une qui réunnis les entrepreneurs et investisseurs en Afrique francophone.
                    </p>
                    <Button 
                        name={'Je réserve une demo'}
                        icon={'fas fa-chevron-right'}
                        arrow={'arrow'}
                        blob={'blob'}
                    />
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
    min-height: 100vh;
    position: relative;  
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
                font-size: 3rem;
                font-weight: 800;
                span{
                    background:${props => props.theme.colorGradientPrimary2};
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                }
            }
            p{
                font-size: 1.1rem;
                line-height: 1.6rem;
                padding: 2rem 0;
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
                position: absolute;
                width: 350px;
                height: 400px;
                object-fit: cover;
                left: 5%;
                top: 15%;
                border-bottom-right-radius: 5px;
                border-bottom-left-radius: 70px;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
                transition: all .4s ease-in-out;
            }
            .h-img-1{
                position: absolute;
                width: 350px;
                height: 600px;
                object-fit: cover;
                right: 0;
                border-bottom-right-radius: 70px;
                border-bottom-left-radius: 5px;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                transition: all .4s ease-in-out;
            }
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
    }
`;

export default Header