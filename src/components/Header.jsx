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
            
            <div className='header-content u-pad-lg'>
                <div className='box left-h-content'>
                    <h2>
                        Trouvez du <span>financement</span> avec nous
                    </h2>
                    <p className='sub-title'>
                        Réseaux, outils, stratégie. Un accompagnement pour réussir chaque étape de votre levée de fonds
                    </p>
                </div>
                <div className='box right-h-content'>
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
    position: relative;
    height: 85vh;
    text-align: center;
    @media only screen and (max-width: 2560px){
        height: 94vh;
    }
    @media only screen and (max-width: 1800px) {
        height: 98vh;
    }
    
    @media only screen and (max-width: 1024px){
        height: 94vh;
    }
    @media only screen and (max-width: 960px){
        height: 74vh;
    }
    @media only screen and (max-width: 768px){
        height: 74vh;
    }
    @media only screen and (max-width: 425px) {
        height: 90vh;
    }
    
    @media only screen and (max-width: 375px) {
        height: 114vh;
    }
    .header-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;

        .left-h-content{
            position: relative;
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
            }
            .sub-title{
                font-size: 1.2rem;
                line-height: 1.6rem;
                padding: 2rem 0;
                font-weight: bold;
                font-family: 'Roboto', sans-serif;
                @media only screen and (max-width: 376px){
                    margin-left: 6%;
                    margin-right: 6%;
                    text-align: justify;
                }
            }
            @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    margin-top: 1%;
                    width: 850px;
                    height: 550px;
                    font-size: 3.1rem;
                    h2{
                        font-size: 5.1rem;
                    }
                    p{
                        font-size: 1.8rem;
                    }
                    .button-demo{
                        width: 200%;
                    }
                }
            @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    margin-top: 1%;
                    width: 650px;
                    height: 500px;
                    h2{
                        font-size: 65px;
                    }
                    p{
                        font-size: 25px;
                    }
                    .button-demo{
                        width: 100%;
                    }
            }
            @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    margin-top: 6%;
                    width: 620px;
                    h2{
                        font-size: 58px;
                    }
                    p{
                        font-size: 22px;
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
            @media only screen and (max-width: 1024px) {
                    margin-top: 4%;
                    width: 400px;
                    h2{
                        font-size: 35px;
                    }
                    p{
                        font-size: 16px;
                    }
            }
            @media only screen and (max-width: 960px) {
                    margin-top: 4%;
                    width: 400px;
                    h2{
                        font-size: 35px;
                    }
                    p{
                        font-size: 18px;
                    }
            }
            @media only screen and (max-width: 768px){
                    margin-top: 8%;
                    width: 350px;
                    h2{
                        font-size: 32px;
                    }
                    p{
                        font-size: 18px;
                    }
            }
            @media only screen and (max-width: 525px) and (min-width: 425px) {
                    margin-top: -10%;
                    margin-left: -9.6%;
                    text-align: justify;
                    h2{
                        font-size: 37px;
                    }
                    p{
                        font-size: 16px;
                    }
                    
            }
            @media only screen and (max-width: 425px){
                    margin-top: -10%;
                    margin-left: -12.5%;
                    text-align: justify;
                    h2{
                        font-size: 28px;
                    }
                    p{
                        font-size: 15px;
                        margin-top: -20px;
                    }
            }
            @media only screen and (max-width: 320px){
                    margin-top: -10%;
                    text-align: justify;
                    h2{
                        font-size: 27px;
                    }
                    p{
                        font-size: 15.5px;
                    }
            }
            
            @media only screen and (max-width: 1800px) and (min-width: 1440px){
                margin-left: -80px;
            }
            @media only screen and (max-width: 1440px) and (min-width: 1024px){
                margin-left: -70px;
            }
            @media only screen and (max-width: 1024px) {
                .button-demo {
                    position: absolute;
                    margin-left: 3%;
                }
            }
            @media only screen and (max-width: 768px) {
                .button-demo {
                    position: absolute;
                    margin-left: 5%;
                }
            }
            
            @media only screen and (max-width: 425px){
                width: 290px;
                margin-left: -45px;
                .button-demo {
                    position: absolute;
                    top: 185%;
                    margin-left: 12%;
                    width: 285px;
                }
            }
            @media only screen and (max-width: 400px){
                width: 290px;
                margin-left: -45px;
                .button-demo {
                    position: absolute;
                    margin-left: 12%;
                    width: 285px;
                }
            }
            @media only screen and (max-width: 375px){
                width: 290px;
                margin-left: -45px;
                .button-demo {
                    position: relative;
                    margin-top: 85%;
                    margin-left: -8%;
                    width: 290px;
                }
            }
            @media only screen and (max-width: 320px){
                .button-demo {
                    margin-top: 70%;
                }
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
                    width: 560px;
                    height: 660px;
                    left: -8%;
                }
                @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    width: 350px;
                    height: 420px;
                    margin-left: -100px;
                }
                @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                    margin-left: 20px ;
                    width: 280px;
                    height: 380px;
                }
                @media only screen and (max-width: 1350px) and (min-width: 1250px) {
                    width: 280px;
                    height: 380px;
                }
                @media only screen and (max-width: 1250px) and (min-width: 1024px){
                    width: 230px;
                    height: 340px;
                }
                @media only screen and (max-width: 1024px){
                    width: 200px;
                    height: 280px;
                    margin-top: 30px;
                    border-bottom-right-radius: 5px;
                    border-bottom-left-radius: 30px;
                    border-top-right-radius: 5px;
                    border-top-left-radius: 5px;
                }
                @media only screen and (max-width: 960px){
                    width: 190px;
                    height: 280px;
                    margin-top: 30px;
                    margin-left: -15px;
                }
                @media only screen and (max-width: 525px) and (min-width: 425px){
                    width: 150px;
                    height: 200px;
                    margin-right: 300px;
                }
                @media only screen and (max-width: 425px) {
                    width: 147px;
                    height: 200px;
                    margin-top: 0px;
                    margin-right: -300px;
                }
                @media only screen and (max-width: 320px) {
                    width: 130px ;
                    height: 180px;
                    margin-left: 20px;
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
                    width: 600px;
                    height: 800px;
                }
                @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    top: -10%;
                    width: 350px;
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
                    width: 260px;
                    height: 430px;
                }
                @media only screen and (max-width: 1024px){
                    top: -1%;
                    width: 230px;
                    height: 350px;
                    margin-left: 20px;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 5px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
                @media only screen and (max-width: 960px) {
                    top: -1%;
                    width: 220px;
                    height: 350px;
                    margin-left: 2px;
                }

                @media only screen and (max-width: 730px){
                    width: 200px;
                    height: 330px;
                    margin-left: -2px;
                }

                @media only screen and (max-width: 525px) and (min-width: 425px){
                    top: 0cm;
                    width: 160px;
                    height: 200px;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 5px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
                @media only screen and (max-width: 425px) {
                    top: 0%;
                    width: 140px;
                    height: 200px;
                    margin-left: 50px;
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 5px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
                @media only screen and (max-width: 320px) {
                    width: 130px ;
                    height: 180px;
                    margin-left: 50px;
                }
            }
            @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                margin-left: 55px;
            }
            @media only screen and (max-width: 1250px) and (min-width: 1024px) {
                margin-left: 40px;
            }
            @media only screen and (max-width: 1024px){
                width: 280px;
            }
            @media only screen and (max-width: 525px) and (min-width: 425px){
                margin-left: -3%;
                margin-top: 30%;
            }
            @media only screen and (max-width: 425px){
                margin-left: -16%;
                margin-top:  35%;
                width: 370px;
            }
            @media only screen and (max-width: 400px){
                margin-left: -14%;
                margin-top: 34%;
                
            }
            @media only screen and (max-width: 375px){
                margin-left: -16.5%;
                margin-top: 45%;
                width: 370px;
            }
            @media only screen and (max-width: 320px) {
                width: 325px;
                margin-top: 38%;
                margin-left: -12%;
            }
        }
        @media only screen and (max-width: 2560px) and (min-width: 1800px) {
                    margin-top: 3%;
                }
        @media only screen and (max-width: 1800px) and (min-width: 1440px) {
                    margin-top: 1%;
                }
        @media only screen and (max-width: 1440px) and (min-width: 1350px) {
                margin-left: -40px;
            }
        @media only screen and (max-width: 1350px) and (min-width: 1250px) {
                margin-left: -80px;
            }
        @media only screen and (max-width: 1250px) {
                margin-left: -70px;
            }
            @media only screen and (max-width: 1024px) {
                margin-left: -150px;
                margin-top: -7%;
            }
            @media only screen and (max-width: 960px) {
                margin-left: -210px;
            }
            @media only screen and (max-width: 768px) {
                margin-top: -10%;
                margin-left: 0px;
            }
            @media only screen and (max-width: 525px) and (min-width: 425px) {
                display: flex ;
                position: relative;
                margin-left: -200px;
                .box {
                    position: absolute;
                    .right-h-content{
                        z-index: 9;
                        visibility: hidden;
                    }
                }
            }
            @media only screen and (max-width: 425px) {
                display: flex ;
                position: relative;
                margin-left: -180px;
                margin-top: -13%;
                .box {
                    position: absolute;
                    .right-h-content{
                        z-index: 9;
                    }
                }
            }
            @media only screen and (max-width: 400px) {
                display: flex ;
                position: relative;
                margin-left: -200px;
                margin-top: -13%;
                .box {
                    position: absolute;
                    .right-h-content{
                        z-index: 9;
                    }
                }
            }
            @media only screen and (max-width: 320px) {
                margin-left: -230px;
                margin-top: -18%;
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
        @media only screen and (max-width: 525px) and (min-width: 425px){
                    margin-bottom: -2%;
            }
        @media only screen and (max-width: 425px){
                    margin-bottom: -4%;
            }
        @media only screen and (max-width: 400px){
                    margin-bottom: -4%;
            }
            @media only screen and (max-width: 375px){
                    margin-bottom: 0%;
            }
    }
`;

export default Header