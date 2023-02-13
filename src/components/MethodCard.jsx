import styled from 'styled-components';
import { useTheme } from '../context/themeContext';

const MethodCard = ({title, desc, icon}) => {
    const theme = useTheme();
    return (
        <MethodCardStyled  theme={theme}>
            <div className='m-item-con'>
                <img src={icon} alt='' />
                <h4>{title}</h4>
                <p>
                    {desc}
                </p>
                {/* <a href='#' className='learn-more'>
                    <span>
                        En savoir plus
                    </span>
                    <span className='arrow'>
                        <i className='fas fa-chevron-right'></i>
                    </span>
                </a> */}
            </div>
        </MethodCardStyled>
    )
}

const MethodCardStyled = styled.section`
    position: relative;
    width: 200;
    background-color: ${props => props.theme.colorWhite};
    text-align: center;
    padding: 2.5rem 1rem;
    border-radius: 2px;
    transition: all .4s ease-in-out;
    
    @media only screen and (max-width: 425px){
        width: 90%;
        height: 100%;
    }
    @media only screen and (max-width: 400px){
        width: 100%;
        height: 100%;
        margin-left: -45px;
    }
    @media only screen and (max-width: 375px){
        width: 80%;
        height: 100%;
        margin-left: -20px;
    }
    @media only screen and (max-width: 320px){
        width: 75%;
        height: 90%;
        margin-left: -40px;
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
        img{
            padding-bottom: 2rem;
            height: 100px;
        }
        h4{
            font-size: 1.5rem;
            padding-bottom: 1rem;
        }
        p{
            padding-bottom: 1.5rem;
            @media only screen and (max-width: 525px) and (min-width: 425px){
                font-size: 15px;
            }
            @media only screen and (max-width: 425px){
                font-size: 15px;
            }
        }
    }

    
`;

export default MethodCard