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
    font-size: 17px;
    background: ${props => props.theme.colorWhite};
    padding: .3rem 0rem;
    border-radius: 30px;
    position: relative;
    transition: all .4s ease-in-out;
    display: inline-block;
    height: 40px;
    width: 270px;
    .linkedin-img{
        width: 10%;
        margin-left: 170px;
    }
`
export default LoginLinkedin;