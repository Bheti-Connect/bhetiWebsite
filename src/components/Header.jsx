import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import premiereImg from '../assets/images/My-project.png';
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
                        Réseaux, outils, stratégie. Un accompagnement pour réussir chaque étape de votre levée de fonds.
                    </p>
                    <div className='cta-button'>
                    <Link
                        to={'/formulaire'}
                    > 
                        <Button
                            name='Intégrer le réseau'
                            arrow={'arrow'}
                            icon={'fas fa-arrow-right'}
                        />
                    </Link>
                    </div>
                </div>
                <div className='image'>
                    <img  className='h-img-1' src={premiereImg} alt='image-1' />
                </div>
            </div>
            {/* <div className='mouse'>
                <span></span>
            </div> */}
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
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
    width: 95%;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        }

    .text {
        flex: 1 ;
        position: relative;
        width: 70%;
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
            font-size: 4.25vw;
            margin-bottom: 20px;
            text-align : left;
            line-height: 1;
            width: 92%;
            margin-left: 5%;
            span{
                background:${props => props.theme.colorBheti};;
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
            }
            @media screen and (max-width: 800px){
                font-size: 2.2em;
                width: 75% ;
            }
            @media screen and (max-width: 500px){
                font-size: 2.2em;
            }
        }
        .sub-title{
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            width: 80%;
            margin-left: 5%;
            margin-top: 3%;
            font-size: 1.2em;
            @media screen and (max-width: 800px){
                width: 75%;
                margin-top: 2%;
                margin-left: 12.5%;
            }
            @media screen and (max-width: 500px){
                font-size: .8em;
            }
        }
        .cta-button{
            position: relative;
            margin-top: 2.5%;
            margin-left: 5%;
            @media screen and (max-width: 800px){
                position: relative;
                margin-top: 4%;
                margin-left: 12%;
            }
            @media screen and (max-width: 440px){
                position: relative;
                margin-top: 4%;
                margin-left: 0%;
            }
        }
        @media screen and (max-width: 800px){
            margin-top: 5%;
            width: 100%;
        }
    }

    .image {
        position: relative;
        width: 33%;
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
            .h-img-1{
                position: relative;
                transform: scale(1.09);
                @media screen and (max-width: 540px) {
                    transform: none;
                    }
            }
        }
        @media screen and (min-width: 960px){
            z-index: -1;
        }
        @media screen and (max-width: 540px) {
            width: 80%;
            }
        .h-img-1 {
            width: 100%;
            margin: 2%;
            height: auto;
            transition: all .4s ease-in-out;
            @media screen and (min-width: 800px){
                margin: 0 -2%;
            }
        }
        @media screen and (max-width: 800px){
            width: 70%;
        }
        @media screen and (max-width: 500px){
            width: 80%;
        }
    }
}

    .mouse{
        transform: translateX(-50%);
        width: 30px;
        height: 45px;
        margin-bottom: 50px !important;
        border-radius: 30px;
        border: 2px solid ${props => props.theme.colorBlack};
        pointer-events: none;
        background-color: white;
        margin:auto;
        span {
            position: absolute;
            left: 50%;
            top: 50%;
            height: 6px;
            width: 6px;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: ${props => props.theme.colorGradientPrimary2};
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
                display: flex;
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
                display: flex;
                img {
                    width: 100%;
                    max-width: none;
                    height: 50%;
                }
            }
        }
`;

export default Header;
