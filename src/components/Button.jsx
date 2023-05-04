import styled from 'styled-components';
import { useTheme } from '../context/themeContext';

const Button = ({name, icon, arrow, blob}) => {
    const theme = useTheme();
    return (
        <ButtonStyled theme={theme}>
            {name}
            <span className={arrow}><i className={icon}></i></span>
            <span className={blob}></span>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    cursor: pointer;
    overflow: hidden;
    color: ${props => props.theme.colorWhite};
    background: ${props => props.theme.colorBheti};
    padding: .8rem 2rem;
    border-radius: 30px;
    position: relative;
    transition: all .4s ease-in-out;
    display: inline-block;
    .blob{
        position: absolute;
        top: -5px;
        right: -55%;
        width: 180px;
        height: 180px;
        background: rgba(255, 255, 255, .2);
        border-radius: 50%;
        transition: all .4s cubic-bezier(.29,.73,.46,.52);
    }
    &:hover{
        span{
            right: -30%;
            top: -15px;
        }
    }
    @media only screen and (max-width: 2560px) and (min-width: 1800px) {
        width: 250px;
        height: 50px;
        .name {
            font-size: 3000px;
        }
    }
`;

export default Button