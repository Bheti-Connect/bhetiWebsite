import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import premiereImg from '../assets/images/ent-img1.jpg';
import deuxiemeImg from '../assets/images/ent-img4-2.jpg';
import Button from './Button';
import { Link } from 'react-router-dom';


const Header = () => {
    const theme = useTheme()
    return (
        <HeaderStyled theme={theme}>
            <div className='header-content'>
                
                <div className='text'>
                    <h2>
                        Trouvez du <span>financement</span> avec nous
                    </h2>
                    <p className='sub-title'>
                        Réseaux, outils, stratégie. Un accompagnement pour réussir chaque étape de votre levée de fonds
                    </p>
                </div>
                <div className='images'>
                    <img  className='h-img-1' src={premiereImg} alt='image-1' />
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
height : 80vh;
display: flex;
flex-direction: column;
justify-content: center;

.header-content {
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2em;

    @media screen and (max-width: 912px) {
        flex-direction: column;
        }

    @media screen and (max-width: 820px) {
        flex-direction: column;
        }


    .text {
        flex: 1;
        padding-right: 20px;


        @media screen and (max-width: 540px) {
            font-size: 10px;

            }

        animation: contentHide 1.5s ease-in-out;

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
        h2 {
            font-size: 4rem;
            margin-bottom: 20px;
            font-family: 'Cinzel', serif;
            text-align : center;

            @media screen and (max-width: 540px) {
                font-size: 2rem;
                }

            span{
                background:${props => props.theme.colorGradientPrimary3};;
                background-clip: text;
                font-family: 'Cinzel', serif;
                -webkit-background-clip: text;
                color: transparent;
            }
        }

        p {
            text-align: center;
        }
    }

    .images {
        flex: 1;
        display: flex;
        justify-content: center;
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
                @media screen and (max-width: 540px) {
                    transform: none;
            
                    }


            }
            .h-img-1{
                transform: scale(1.1);
                @media screen and (max-width: 540px) {
                    transform: none;
                    }
            }
        }

        @media screen and (max-width: 540px) {
            width: 80%;
            }

        .h-img-1 {
            width: 48%;
            margin: 2%;
            max-width: 300px;
            height: auto;

            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 70px;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            transition: all .4s ease-in-out;

            @media screen and (max-width: 912px) {
                border-bottom-right-radius: 0px;
                border-bottom-left-radius: 0px;
                border-top-right-radius: 0px;
                border-top-left-radius: 0px;
                }
            
            @media screen and (max-width: 540px) {
                
                border-bottom-right-radius: 0px;
                border-bottom-left-radius: 0px;
                border-top-right-radius: 0px;
                border-top-left-radius: 0px;
                
                }

        }

        .h-img-2 {
            width: 48%;
            max-width: 300px;
            height: auto;
            border-bottom-right-radius: 70px;
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            transition: all .4s ease-in-out;

            @media screen and (max-width: 912px) {
                margin: 2%;
                border-bottom-right-radius: 0px;
                border-bottom-left-radius: 0px;
                border-top-left-radius: 0px;
                border-top-right-radius: 0px;
                }

            @media screen and (max-width: 540px) {
                margin: 2%;
                border-bottom-right-radius: 0px;
                border-bottom-left-radius: 0px;
                border-top-left-radius: 0px;
                border-top-right-radius: 0px;
                          
                }
        }

    }

    .mouse{

        transform: translateX(-50%);
        width: 30px;
        height: 45px;
        border-radius: 30px;
        border: 2px solid ${props => props.theme.colorBlack};
        pointer-events: none;
        background-color: red;
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


    @media screen and (max-width: 768px) {
            flex-direction: column;

            .text {
                flex: none;
                width: 100%;
               
            }

            .images {
                justify-content: center;
                display: flex
                img {
                    width: 80%;
                    max-width: none;
                    height: 50%;
                }

            }

        }


    @media screen and (max-width: 414px) {
        
            .text {
                flex: none;
                width: 100%;
                
                h2 {
                    font-size: 2rem;   
                }

            }

            .images {
                justify-content: center;
                display: flex
                img {
                    width: 100%;
                    max-width: none;
                    height: 50%;
                }

            }
     
}`;

export default Header
