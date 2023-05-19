import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import newsImage from '../assets/images/newsImage.jpg';
import Button from './Button'

const EconomicNews = () => {
    const theme = useTheme();
    return (
        <EconomicNewsStyled theme={theme}>
            <div className='left-rec'>
                <img src={newsImage} alt='news-illustration' />
            </div>
            <div className='right-rec'>
                <div className='rec-content'>
                    <h3 className='title'>
                        Actualité économique & écosystèmes d’affaires
                    </h3>
                    <p className='subtitle-text'>
                        L’information est l’une des clés stratégiques pour trouver du financement. Avec la plateforme BHC, vous retrouvez les informations essentielles qui permettront d’accélérer votre recherche de financement. 
                        Mais aussi de tenir compte de l'environnement économique et des tendances du marché pour promouvoir votre projet.
                    </p>
                    <div className='bouton'>
                        <a href='/media' className=''>
                            <Button 
                                name={"Je m'informe"}
                                icon={'fas fa-chevron-right'}
                                arrow={'arrow'}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </EconomicNewsStyled>
    )
}

const EconomicNewsStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    background-color: ${props => props.theme.colorBlack};
    margin-bottom: 6rem;
    box-shadow: 0 5px 18px #212529b7;
    @media (min-width: 960px) {
        height: 80vh;
    }
    @media only  screen and (max-width: 440px) {
        position: relative;
        width: 100%;
        height: 105vh !important;
    }
    @media only  screen and (max-width: 415px) {
        height: 100vh;
    }

    @media only  screen and (max-width: 376px) {
        height: 780px;
    }

    @media only  screen and (max-width: 321px) {
        height: 770px;
    }
    
    .left-rec{
        overflow: hidden;
        border-top-left-radius: 5px;
        img{
            border-top-left-radius: 5px;
            width: 100%;
            object-fit: cover;
            filter: grayscale(100%);
            transition: all .3s ease-in-out;
            &:hover{
                filter: grayscale(0);
                transform: scale(1.2) rotate(4deg);
            }
            @media only  screen and (max-width: 320px) {
                width: 100%;
            }
        } 
    }
    .right-rec{
        display: flex;
        align-items: center;
        .rec-content{
            padding: .8rem;
            h3{
                color: ${props => props.theme.colorWhite};
                font-size: 2.3rem;
                padding-bottom: 1rem;
                position: relative;
                margin-bottom: 2rem;
                &::after{
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 23%;
                    height: 2px;
                    background-color: ${props => props.theme.colorAccent};
                    @media only screen and (max-width: 425px){
                            margin-left: 15px;
                            width: 45%;
                    }
                }
                @media only screen and (max-width: 1600px) {
                    font-size: 2.1rem;
                }
                @media only screen and (max-width: 1430px) {
                    font-size: 1.95rem;
                }
                @media only screen and (max-width: 1350px) {
                    font-size: 1.82rem;
                }
                @media only screen and (max-width: 1250px) {
                    font-size: 1.7rem;
                }
                @media only screen and (max-width: 768px) {
                    font-size: 1.52rem;
                    width: 100%;
                }
                @media only screen and (max-width: 425px) {
                    font-size: 1.5rem;
                    width: 97%;
                }
                @media only screen and (max-width: 320px) {
                    margin-top: 20% ;
                    font-size: 1.15rem;
                }
            }
            .subtitle-text{
                font-family: 'Montserrat', sans-serif;
                color: ${props => props.theme.colorGrey4};
                padding-bottom: 2rem;
                text-align: justify;
                line-height: 1.5;
                width: 100%;
                font-size: 1.1rem;
                @media only screen and (max-width: 525px) and (min-width: 425px){
                    font-size: 16px ;
                }
                
            }
            .bouton {
                position: relative;
                @media only screen and (max-width: 525px) {
                    margin: 5px auto;
                    width: 70%;
                }
                @media only screen and (max-width: 320px) {
                    width: 70%;
                }
            }
            
        }
    }
    @media only screen and (max-width: 500px){
        display: block;
        .left-rec{
            height: 45vh;
        }
        .right-rec{
            .rec-content{
                width: 92%;
                margin: 0 auto;
                .subtitle-text{
                    font-family: 'Montserrat', sans-serif;
                    font-size: 15.5px;
                    text-align: left;
                }
            }
        }
    }
`;

export default EconomicNews