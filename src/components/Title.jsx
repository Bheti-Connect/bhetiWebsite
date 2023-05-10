import styled from 'styled-components';
import { useTheme } from '../context/themeContext';

const Title = ({ name, subtext}) => {
    const theme =useTheme();
    return (
        <TitleStyled theme={theme}>
            <h3>
                {name}
            </h3>
            
            <p className='subtext'>{subtext}</p>
        </TitleStyled>
    )
}


const TitleStyled = styled.div`
    h3{
        font-size: 2.6vw;
        @media only screen and (max-width: 2560px){
            width:100%;
        }

        @media only screen and (max-width: 525px){
            font-size: 30px;
            margin-top: -10%;
            margin:auto;
            width: 100% !important;
        }
        @media only screen and (max-width: 425px){
            font-size: 29px;
            width: 100% !important;

        }
        @media only screen and (max-width: 320px){
            font-size: 20px;
            margin-top: -20%;
        }
    }

    .subtext{
        text-align: justify;
        text-justify: inter-word;
        @media only screen and (max-width: 525px) and (min-width: 425px){
            font-size: 15px;
        }
        @media only screen and (max-width: 425px){
                font-size: 14.3px;
        }
        @media only screen and (max-width: 320px){
                font-size: 14.8px;
        }
    }
`;

export default Title