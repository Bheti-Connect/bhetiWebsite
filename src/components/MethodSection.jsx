import React from 'react';
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
                    name={'Notre méthode'}
                    subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    "
                />
            </div>
            <div className='methods-con' >
                <MethodCard
                    title={"D'abord"}
                    desc={'Evaluez votre capacité à bénéficier d’un investissement et élaborer un plan d’action pour réussir votre levée de fonds'}
                    icon={checking}
                />
                <MethodCard
                    title={"Ensuite"}
                    desc={'Trouvez les investisseurs, qui vous correspondent, établissez des relations et développez votre réseau d’investisseur'}
                    icon={investors}
                />
                <MethodCard
                    title={"Par après"}
                    desc={'Inspirez-vous de différents modèles pour vous guider et structurer votre collecte de fonds'}
                    icon={layout}
                />
                <MethodCard
                    title={"Finalement"}
                    desc={'Remplissez toutes les conditions nécessaires pour prouver le potentiel de votre entreprise et convaincre des investisseurs de vous suivre.'}
                    icon={conditions}
                />
            </div>
        </MethodSectionStyled>
    )
}

const MethodSectionStyled = styled.section`
    margin: 50px 80px;

    .methods-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-gap: 2rem;
        padding-top: 3rem;
        @media only screen and (max-width: 425px) and (min-width: 320px){
            width: 15px;
    }
    }
    .title-con {
        @media only screen and (max-width: 425px) and (min-width: 320px) {
            width: 120%;
            margin-left: -20px;
        }
    }
`;

export default MethodSection;