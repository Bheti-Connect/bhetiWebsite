import styled from 'styled-components'
import { useTheme } from '../../../context/themeContext';
import linkedIn from '../../../assets/images/linkedin-logo.png'


const LoginLinkedin = ({name}) => {
    const theme = useTheme();
    return (
        <ButtonStyled theme={theme}>
            {name}
            <img src={linkedIn} className='linkedin-img'/>
            
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
cursor: pointer;
    overflow: hidden;
    color: ${props => props.theme.colorBlack};
    font-family: 'Cinzel';
    font-size: 14px;
    background: ${props => props.theme.colorWhite};
    padding: .3rem 0rem;
    border-radius: 30px;
    position: relative;
    transition: all 1.5 s ease-in-out;
    display: inline-block;
    z-index: -1;
    height: 40px;
    width: 270px;
    .linkedin-img{
        width: 10%;
        margin-left: 170px;
        @media only screen and (max-width: 1800px){ 
            width: 4.3%;
        }
    }
    @media only screen and (max-width: 1800px){
        width: 400px;
        height: 35px;
        margin-bottom: 8%;
    }
`
export default LoginLinkedin;