import styled from 'styled-components';
import { useTheme } from '../context/themeContext';

const MethodCard = ({title, desc, icon}) => {
    const theme = useTheme();
    return (
        <MethodCardStyled  theme={theme}>
            <div className='m-item-con'>
                <img className='image' src={icon} alt='icon' />
                <h4>{title}</h4>
                <p className='description'>
                    {desc}
                </p>
            </div>
        </MethodCardStyled>
    )
}

const MethodCardStyled = styled.section`
    position: relative;
    width: 100%;
    background-color: ${props => props.theme.colorWhite};
    text-align: center;
    padding: 2.8rem 1rem;
    border-radius: 2px;
    transition: all .4s ease-in-out;
    
    @media only screen and (max-width: 425px){
        width: 100%;
        margin: 0 auto;
    }
    @media only screen and (max-width: 320px){
        width: 100%;
        height: 90%;
        margin:auto;
    }

    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .4rem;
        background: ${props => props.theme.colorGradientPrimary2};
        transition: all .4s ease-in-out;
        transform: scale(0);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    } 
    &:hover{
        box-shadow: 10px 10px 0px ${props => props.theme.colorGreyDark};
        transform: translateY(-5px);
        &::before{
            transform: scale(1);
        }
    }
    .m-item-con{
        width: 100%;
        .image{
            color: ${props => props.theme.colorBheti};
            padding-bottom: 2rem;
            height: 100px;
            @media only screen and (max-width: 425px){
                width: 50px;
                height: 100%;
            }
        }
        h4{
            font-size: 1.5rem;
            padding-bottom: 1rem;
            @media only screen and (max-width: 1200px){
                font-size: 1.3rem;
            }
            @media only screen and (max-width: 1200px){
                font-size: 1.1rem;
            }
        }
        .description{
            font-family: 'Montserrat', sans-serif;
            padding-bottom: 1.5rem;
            text-align: left;
            line-height: 1.45;
            font-size: 1.1rem;
            @media only screen and (max-width: 525px) and (min-width: 425px){
                font-size: 14px;
            }
            @media only screen and (max-width: 425px){
                font-size: 14px;
            }
        }
    }
`;

export default MethodCard