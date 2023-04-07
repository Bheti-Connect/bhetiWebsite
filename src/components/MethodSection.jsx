import styled from 'styled-components';
import { useTheme } from 'styled-components';
import MethodCard from './MethodCard';
import Title from './Title';
import checking from '../assets/images/list.png';
import investors from '../assets/images/investor.png';
import layout from '../assets/images/layout.png';
import conditions from '../assets/images/contract.png';



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
                    title={"Nous préparons votre documentation"}
                    desc={'BP, Pitch deck, Etats financiers.'}
                    icon={checking}
                />
                <MethodCard
                    title={"Nous contactons et partageons"}
                    desc={'votre besoin de financement à nos partenaires - investisseurs.'}
                    icon={investors}
                />
                <MethodCard
                    title={"Nous vous accompagnons"}
                    desc={'dans les négociations autour du montant de l’investissement, la valorisation de l’entreprise et les conditions de financement.'}
                    icon={layout}
                />
            
            </div>
        </MethodSectionStyled>
    )
}

const MethodSectionStyled = styled.section`
    margin: 60px 80px 100px;
    
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
        @media only screen and (max-width: 425px) {
            margin-left: -4vw ;
        }
        @media only screen and (max-width: 376px) {
            margin-left: -0.2vw ;
        }
    }

    .title-con {
        @media only screen and (max-width: 425px) {
            width: 120%;
            margin-left: -28px;
        }
        @media only screen and (max-width: 400px) {
            width: 130%;
            margin-left: -30px;
        }
        @media only screen and (max-width: 375px) {
            width: 120%;
            margin-left: -20px;
        }
    }
`;

export default MethodSection;