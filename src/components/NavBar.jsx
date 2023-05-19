import { useState } from 'react';
import styled from 'styled-components'
import theLogo from '../assets/images/Logo.svg';
import { useTheme } from '../context/themeContext';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    // const navRef = useRef();
    const [etat, setEtat] = useState({clicked: false});

    // const [rotate, setRotate] = useState(false);
    // console.log("rotate status: ", rotate);
    // rotate?document.body.style.overflow = "hidden": document.body.style.overflow = "auto";

    // const stopScroll = () => {
    //     setRotate(!rotate)
    // }

    const removeNavMenu = () => {
        setShow((show) => !show);
        };

    const handleClick = () => {
        setEtat({clicked: !etat.clicked})
    }

    const theme = useTheme();
    return (
        <NavBarStyled theme={theme}>
            <div className='hero'>
                <div className='logo'>
                        <NavLink to='/'>
                            <img
                                src={theLogo}
                                className='theLogo'
                                alt='Le logo'
                            />
                        </NavLink>
                </div>
                <nav className={etat.clicked ? 'navigation active' : 'navigation'}  >
                        <div 
                            className={etat.clicked ? 'nav-menu active' : 'nav-menu'} 
                        >
                            <NavLink
                                onClick={handleClick}
                                to='/entrepreneur'
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                                Entrepreneur
                            </NavLink>
                            <NavLink
                                onClick={handleClick}
                                to='/investisseur'
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                                Investisseur
                            </NavLink>
                            <NavLink
                                onClick={handleClick}
                                to='media'
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                                Média 
                            </NavLink>
                            <a href='https://app.bheticonnect.com/' className='connexion-hover link'>
                                Connexion
                            </a>

                        </div>
                    </nav>
                        <div id='menu-icon' onClick={handleClick}> 
                            <i className={etat.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered'}></i>
                        </div>
            </div>
        </NavBarStyled>
    )
}

const NavBarStyled = styled.nav`
.hero{
    display: flex;
	justify-content: space-between;
	height: 80px;
	padding: 0rem 1rem 0rem 3rem;
    .logo{
            display: flex;
            align-items: center;
            animation: navHide 1s ease-in-out;
            animation-delay: 0.2s;
            visibility: hidden;
            animation-fill-mode: forwards;
            width: 20%;
            .theLogo{
                margin-top: 10%;
                width: 10vw;
                margin-right: 10rem;
                @media only screen and (max-width: 1280px) {
                    width: 11vw;
                }
                @media only screen and (max-width: 1024px) {
                    width: 13vw;
                }
                @media only screen and (max-width: 860px) {
                    width: 14vw;
                }
                @media only screen and (max-width: 768px) {
                    width: 18vw;
                }
                @media only screen and (max-width: 600px) {
                    width: 24vw;
                }
            }
}
.navigation {
        display: flex;
        grid-template-columns: 100px 1fr auto;
        padding: 1rem  1rem;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        @media only screen and (max-width: 2560px) {
            
        }
        @media only screen and (max-width: 1024px) {
            border-bottom: 0px solid ${props => props.theme.colorBg};
        }
        animation: navHide 1s ease-in-out;
        @keyframes navHide {
            0%{
                transform: translateY(-100%) scaleY(0);
                opacity: 0;
            }
            100%{
                transform: translateY(0) scaleY(1);
                opacity: 1;
                visibility: visible;
            }
        }
        .nav-menu {
            display: inline-block;
            grid-template-columns: repeat(4, auto);
            grid-gap: 10px;
            text-align: center;
            width: 70vw;
            justify-content: end;
            margin-right: .2rem;
            @media only screen and (max-width: 2560px) {
                
            }
            @media only screen and (min-width: 960px) {
                display: grid;
                justify-content: space-around;
            }
        }
    }
            #menu-icon {
                align-items: center;
                visibility: hidden;
                .fa-bars-staggered {
                    color: ${props => props.theme.colorBlack};
                }
            }
            #menu-icon i{
                font-size: 2.4rem;
            }
            
            }
            .nav-btn-container{
                margin-left: 12px ;
            }
    .nav-menu {
    width: 100vw;
    max-width: 1480px;
    margin: 0 auto;
    .link {
    display: inline-block;
    @media only screen and (min-width: 960px){
        margin-top: 15px;
    }
    color: ${props => props.theme.colorGrey};
    }
    .link:hover{
        color: ${props => props.theme.colorBheti};
        transition: .3s;
    }
    .link-connect{
        margin-left: 10%;
    }
    .active{
        color: ${props => props.theme.colorBheti};
    }
    
    .link:hover {
        color: ${props => props.theme.colorBheti};
    }
    .connexion-hover{
        border: 2px solid ${props => props.theme.colorBheti};
        padding: 5px 15px;
        border-radius: 50px;
        margin-top: 10px;
        transition: .3s;
        &:hover{
            background-color: ${props => props.theme.colorBheti};
            color: ${props => props.theme.colorWhite};
            transition: .3s;
        }
    }
}
@media only screen and (max-width: 960px){
    .hero{
        .logo{
            width: 50%;
        }
    }
    .navigation {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: fixed;
        top: 0px;
        right: -2000px;
        transition: all 0.6s ease;
        width: 100vw;
        height: 100vh;
        background: ${props => props.theme.colorBlack};
        box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
        padding: 40px 0 0 10px;
        z-index: 100;
        
        .nav-menu{
            position: absolute;
            margin: auto;
            
            .link{
                position: relative;
                text-align: center;
                margin: auto;
                margin-top: 12vh;
                font-size: 2.3rem;
                margin-bottom: 70px;
                width: 60%;
                display: table;
                color: ${props => props.theme.colorWhite};
            }
            .link:hover{
                background-color: ${props => props.theme.colorBheti} ;
                border-radius: 0;
            }
        }
        
        .nav-btn-container{
            margin: auto;
        }
        
    }
    .navigation.active{
            right: 0px;
            opacity: 1;
            transition: all 0.6s ease;
            z-index: 3;
        }
    #menu-icon {
            margin-top: 4%;
            right: 4%;
            z-index: 50;
            cursor: pointer;
            .fa-xmark {
                    color: ${props => props.theme.colorWhite};
                } 
            @media only screen and (max-width: 600px){
                margin-top: 7%;
            } 
        }
    #menu-icon i{
        visibility: visible;
    }
}
`;

export default NavBar