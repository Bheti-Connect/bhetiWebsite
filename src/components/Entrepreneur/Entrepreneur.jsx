import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import LaMethode from './LaMethode';
import Accueil from './Accueil';
import Advantages from './Advantages';

const Entrepreneur = () => {
    const theme = useTheme();
    return (
        <EntrepreneurStyled  theme={theme}>
            <Accueil />
            <div className=''>
                <Advantages />
            </div>
            <div className='method-container'>
                <LaMethode />
            </div>
        </EntrepreneurStyled>
    )
}

const EntrepreneurStyled = styled.section`
    text-align: center;
    .method-container{
        margin-top: 2%;
        width: 100%;
    }
`;

export default Entrepreneur