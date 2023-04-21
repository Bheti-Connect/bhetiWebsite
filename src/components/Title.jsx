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
        @media only screen and (max-width: 2560px){
        }

        @media only screen and (max-width: 1800px){
        }

        @media only screen and (max-width: 1440px){
        }

        @media only screen and (max-width: 1350px){
        }

        @media only screen and (max-width: 1024px){
        }

        @media only screen and (max-width: 960px){
        }

        @media only screen and (max-width: 768px){
        }

        @media only screen and (max-width: 600px){
        }

        @media only screen and (max-width: 525px){
            font-size: 28px;
            margin-top: -10%;
            margin:auto;
        }
        @media only screen and (max-width: 425px){
            font-size: 25px;
            margin-top: -10%;
        }
        @media only screen and (max-width: 320px){
            font-size: 20px;
            margin-top: -20%;
        }
    }

    p{
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