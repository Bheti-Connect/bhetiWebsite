import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '../Button';
import { useTheme } from '../../context/themeContext';
import { Link } from 'react-router-dom';

const Accueil = () => {
    const theme = useTheme();
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Financer votre entreprise avec succès !"
        )
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 70)
            }
        }, [index])
    return (
        <AccueilStyled  theme={theme}>
            <div className='first-container'>
                <div className='head'>
                    <div className='centered mobile-view'>
                        <h1><b>{text}</b></h1>
                    </div>
                    <div className='text-highlighted paragraph'>
                        <p>
                        Optimisez votre entreprise avec des données, outils et conseils, accompagné ou non par nos experts, et obtenez les financements pour réussir votre projet.
                        </p>
                    </div>
                </div>
                
                <div className='button-demo'>
                    <Link
                        to={'/decouvrir-bheti-connect'}
                    >   
                        <Button 
                            name={` ${'Essayer Bheti App'}`}
                            arrow={'arrow'}
                            icon={'fas fa-arrow-right'}
                            
                        />
                    </Link>
                </div>
            </div>
        </AccueilStyled>
    )
}

const AccueilStyled = styled.section`
    @media only screen and (max-width: 440px) {
        height: 123vh ;
    }

        .first-container{
        .head {
            display: block;
            position: relative;
            margin: auto;
            margin-top: 1%;
            align-items: center;
            border-radius: 7px;
            @media only screen and (max-width: 1440px){
                width: 100%;
            }
            @media only screen and (max-width: 320px) {
                height: 32vh;
            }
            img{
                width: 70%;
            }
            .centered{    
                position: relative;
                margin: auto;
                font-weight: 900;
                font-size: 40px;
                color: ${props => props.theme.colorBlack};
                h1{
                    font-family: 'Montserrat', sans-serif;
                }
                @media only screen and (max-width: 2560px) {
                    top: 10vh;
                    width: 60vw;
                    font-size: 60px;
                }
                @media only screen and (max-width: 1800px){
                    font-size: 55px;
                }
                @media only screen and (max-width: 1440px){
                    font-size: 45px;
                }
                @media only screen and (max-width: 1350px){
                    font-size: 40px; 
                }
                @media only screen and (max-width: 1024px) {
                    width: 74vw;
                    font-size: 37px; 
                }
                @media only screen and (max-width: 768px){
                    width: 70vw;
                    font-size: 30px;
                    color: ${props => props.theme.colorBlack}; 
                }
            }
            .mobile-view {
                @media only screen and (max-width: 425px){
                    width: 90vw;
                    font-size: 1.3em;
                    margin: 0 -25px;
                    color: ${props => props.theme.colorBlack};
                }
                @media only screen and (max-width: 320px){
                    width: 90vw;
                    font-size: 1.4em;
                    margin: 0 -20px;
                }
            }
        }
        .text-highlighted{
            @media only screen and (max-width: 2500px){
                text-align: center;
                padding-top: 13vh;
                width:70vw;
                margin: auto;
                font-size: 19px;
                p{
                    color: ${props => props.theme.colorGrey6}
                }
            }
            @media only screen and (max-width: 1440px) {
                font-size: 20px;
            }
            @media only screen and (max-width: 1350px) {
                font-size: 1.25rem;
            }
            @media only screen and (max-width: 1024px) {
                font-size: 1.1rem;
            }
            @media only screen and (max-width: 768px){
                font-size: 1.01rem;
                width: 75vw;
                margin-top: 20px;
            }
            @media only screen and (max-width: 430px) {
                font-size: 1rem;
                position: relative;
                text-align: justify;
                width: 80vw;
            }
            @media only screen and (max-width: 320px) {
                position: relative;
                width: 260px;
                margin-left: 10px;
            }
        }
        .button-demo{
            position: relative;
            @media only screen and (max-width: 2500px){
                margin-top: 40px ;
                padding-bottom: 5% ;
            }
            @media only screen and (max-width: 768px){
                width:100%;
            }
            @media only screen and (max-width: 500px){
                position: relative;
                width: 100%;
                margin: 20px  auto;
            }
            @media only screen and (max-width: 425px){
                position: relative;
                width: 75%;
                margin: 20px  auto;
            }
            @media only screen and (max-width: 320px){
                width: 78%;
                margin: 160px  auto;
            }
        }
        @media only screen and (max-width: 1440px){
            position: relative;
        }
        @media only screen and (max-width: 768px) {
            width: 80vw;
            margin: 4px auto;
        }
        @media only screen and (max-width: 425px) {
            width: 80%;
        }
    }
`;

export default Accueil;