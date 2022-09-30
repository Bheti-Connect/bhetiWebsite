import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeContext';

const Title = ({ name, subtext}) => {
    const theme =useTheme();
    return (
        <TitleStyled theme={theme}>
            <h3>
                {name}
            </h3>
            <p>{subtext}</p>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    h3{
        font-size: 2.5rem;
        @media only screen and (max-width: 525px) and (min-width: 425px){
            font-size: 28px;
            margin-top: -10%;
        }
        @media only screen and (max-width: 425px) and (min-width: 320px){
            font-size: 33px;
            margin-top: -10%;
        }
    }
    p{
        text-align: justify;
        text-justify: inter-word;
        @media only screen and (max-width: 525px) and (min-width: 425px){
            font-size: 15px;
    }
    @media only screen and (max-width: 425px) and (min-width: 320px){
            font-size: 16px;
    }
}
`;

export default Title