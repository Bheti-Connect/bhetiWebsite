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
                    <p>
                        Découvrez les codes de la sphère business en Afrique. 
                        Nous vous immergeons dans ce monde encore opaque pour vous apporter des informations transparentes, inédites et exclusives.
                    </p>
                    <Button
                        name={"Je m'informe"}
                        icon={'fas fa-chevron-right'}
                        arrow={'arrow'}
                        blob={'blob'}
                    />
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
    .left-rec{
        overflow: hidden;
        border-top-left-radius: 5px;
        img{
            border-top-left-radius: 5px;
            width: 85%;
            object-fit: cover;
            filter: grayscale(100%);
            height: 100%;
            transition: all .3s ease-in-out;
            &:hover{
                filter: grayscale(0);
                transform: scale(1.2) rotate(4deg);
            }
        }
    }
    .right-rec{
        display: flex;
        align-items: center;
        .rec-content{
            padding: 1rem;
            h3{
                color: ${props => props.theme.colorWhite};
                font-size: 2.5rem;
                padding-bottom: 1rem;
                position: relative;
                margin-bottom: 2rem;
                &::after{
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 20%;
                    height: 2px;
                    background-color: ${props => props.theme.colorAccent};
                }
                @media only screen and (max-width: 525px) and (min-width: 425px) {
                    font-size: 1.5rem;
                }
                @media only screen and (max-width: 425px) and (min-width: 320px) {
                    font-size: 1.5rem;
                }
            }
            p{
                color: ${props => props.theme.colorGrey4};
                padding-bottom: 2rem;
                @media only screen and (max-width: 525px) and (min-width: 425px){
                    font-size: 15px ;
                }
                @media only screen and (max-width: 425px) and (min-width: 320px) {
                    font-size: 1rem;
                }
            }
            @media only screen and (max-width: 525px) and (min-width: 425px) {
                width: 320px;
            }
        }
        @media only screen and (max-width: 425px) and (min-width: 320px) {
                    width: 250px;
                }
    }
`;

export default EconomicNews