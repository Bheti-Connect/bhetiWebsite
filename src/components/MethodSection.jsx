import styled from 'styled-components';
import { useTheme } from 'styled-components';
import MethodCard from './MethodCard';
import Title from './Title';
import {FaClipboardList} from 'react-icons/fa'
import checking from '../assets/images/list.png';
import investors from '../assets/images/investor.png';
import layout from '../assets/images/layout.png';


const MethodSection = () => {
    const theme = useTheme()
    return (
        <MethodSectionStyled className='u-pad methode-itself' theme={theme}>
            <div className='title-con'>
                <Title
                    name={'Notre accompagnement'}
                    subtext="Lever des fonds pour développer sa boîte peut être un véritable casse tête. Grâce à notre expertise, nous simplifions la façon de trouver du financement et augmentons vos chances de succès. "
                />
            </div>
            <div className='methods-con' >
                <MethodCard 
                    desc={'Nous préparons votre documentation BP, Pitch deck, Etats financiers.'}
                    icon={checking}
                />
                <MethodCard
                    desc={'Nous contactons et partageons votre besoin de financement à nos partenaires - investisseurs.'}
                    icon={investors}
                />
                <MethodCard
                    desc={'Nous vous accompagnons dans les négociations autour du montant de l’investissement, la valorisation de l’entreprise et les conditions de financement.'}
                    icon={layout}
                />
            </div>
        </MethodSectionStyled>
    )
}

const MethodSectionStyled = styled.section`
    margin: 60px 80px 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media all and (max-width: 768px) {

    }
    @media all and (max-width: 425px) {
        margin-top: -35px;
    }

    
    .methods-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-gap: 2rem;
        padding-top: 3rem;
        @media only screen and (max-width: 2560px) {
            grid-template-columns: auto auto auto;
            width: 90%;
            margin:auto;
        }
        @media only screen and (max-width: 768px) {
            grid-template-columns: none;
            width: 300px;
        }
        @media only screen and (max-width: 425px){
            margin-left: -7%;
        }
        @media only screen and (max-width: 375px){
            margin-left: -20%;
        }
    }

    .title-con {
        width: 60vw;
        @media only screen and (max-width: 2500px) {
            width: 70% !important;
        }
        @media only screen and (max-width: 768px) {
            width: 100% !important;
        }
        @media only screen and (max-width: 425px) {
            margin-left: -28px;
        }
        @media only screen and (max-width: 400px) {
            width: 130%;
            
            h3 {
                width: 100%;
                font-size: 1.5rem;
                text-align: center;
            }
        }
        @media only screen and (max-width: 375px) {
            width: 100%;
            margin: auto;
        }
        @media only screen and (max-width: 280px) {
            text-align: center;

            h3 {
                font-size: 1.5rem;
                text-align: center;
                margin-left: -20px;
            }
        }
    }
`;

export default MethodSection;