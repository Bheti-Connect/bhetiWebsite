import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import bhetiImage from '../assets/images/pexels-rdne-stock-project-5922212.jpg';
import Button from "./Button";

const AboutSection = () => {
    const theme = useTheme();

    return (
        <AboutSectionStyled  theme={theme}>
            <div className='lower-container'>
                <div className='leftSide'>
                    <h3 className='title'>
                        Développez et financez vos projets
                    </h3>
                    <p>Grâce à la plateforme Bheti App, accédez à un écosystème composé d’experts, d’outils et d’informations… Bref, tout ce qu’il vous faut pour trouver du financement.</p>
                    <div className='steps'>
                        <b>
                        <ol>
                            <li>1. Publiez votre projet, </li>
                            <li>2. Précisez votre besoin,</li>
                            <li>3. Augmentez la visibilité de votre projet auprès d’investisseurs</li>
                        </ol>
                        </b>
                    </div>
                    <div className='test-button'>
                            <Button
                                name='Tester Bheti App'
                                arrow={'arrow'}
                                icon={'fas fa-arrow-right'}
                            />
                    </div>
                </div>
                <div className='rightSide'>
                    <div className='image-div'>
                        <img src={bhetiImage} className='about-img' alt='bheti-image' />
                    </div>
                </div>
            </div>
        </AboutSectionStyled>
        )
}

const AboutSectionStyled = styled.section`
    display: grid;
    background: ${props => props.theme.colorBlack};
    grid-template-columns: auto;
    grid-gap: 1rem;
    .lower-container{
        display: flex;
        position: relative;
        width: 85%;
        margin: 5% auto;
        .leftSide{
            position: relative;
            width: 80%;
            .title{
                color: ${props => props.theme.colorWhite};
                font-size: 2.6vw;
                text-align: left;
                width:85%;
            }
            p{
                color: ${props => props.theme.colorGrey5};
                margin: 1% 0;
                width: 80%;
            }
            .steps{
                position: relative;
                margin: 4% 0;
                ol{
                    list-style: none;
                    li{ 
                        font-family:'Montserrat', sans-serif;
                        color: ${props => props.theme.colorGrey4};
                        font-size: 1.5rem;
                    }
                }
            }
    
        } 
        .rightSide{
            position: relative;
            .image-div{
                margin: auto;
                .about-img{
                    position: relative; 
                    width: 23vw;
                    height: 50%;
                    border-radius: 20px;
            }
        }
    } 

    @media only screen and (max-width: 1150px){
        display: block;
        width: 70%;
        .leftSide{
            position: relative;
            width: 100%;
            .inner-container{
                position: relative;
                width: 100%;
                margin: auto;
            }
        }

        .rightSide{
            position: relative;
            .image-div{
                margin: 5% auto;
                .about-img{
                    width: 70vw;
            }
        }
    }
}
    }
`;

export default AboutSection