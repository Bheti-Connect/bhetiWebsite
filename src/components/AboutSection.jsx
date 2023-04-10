import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import projectManagement from '../assets/images/analytics.png';
import bhetiImage from '../assets/images/bheti-img.jpg';
import giveMoney from '../assets/images/give-money.png'

const AboutSection = () => {
    const theme = useTheme();
    return (
        <AboutSectionStyled  theme={theme}>
            <div className='upper-container'>
                <h3 className='title'>
                    Développez et financez vos projets
                </h3>
                <h4>Grâce à la plateforme BHC, accédez à un écosystème composé d’experts, d’outils et d’informations… Bref, tout ce qu’il vous faut pour trouver du financement.</h4>
            </div>
            <div className='lower-container'>
                <div className='leftSide'>
                    <ol className='subTittle_elements'>
                        <li className='sub'>1. Publiez votre projet </li>
                        <li className='sub'>2. Précisez votre besoin</li>
                        <li className='sub'>3. Augmentez la visibilité de votre projet auprès d’investisseurs</li>
                    </ol>
                </div>
                <div className='rightSide'>
                    <img src={bhetiImage} className='about-img' alt='bheti-image' />
                </div>
            </div>
        </AboutSectionStyled>
        )
}

const AboutSectionStyled = styled.section`
    display: block;
    background-color: ${props => props.theme.colorBlack};
    padding-top: 2vh;
    .upper-container{
        width: 60vw;
        margin: 40px auto;

        .title{
            margin: 20px 0px;
            color: ${props =>props.theme.colorWhite};
            font-size: 2.3rem;
        }
        h4{
            color: ${props =>props.theme.colorGrey5};
        }
    }
    .lower-container{
        display: flex;
        position: relative;
        width: 90%;
        margin: auto;
        .leftSide{
            position: relative;
            background-color: ${props =>props.theme.colorWhite};
            width: 50%;
            height: 60vh;
        }
        .rightSide{
            position: relative;
            margin-left: 20vw;
            margin-bottom: 5vh;
            .about-img{
                width: 25vw;
                height: 35vw;
            }
        }
}
`;

export default AboutSection