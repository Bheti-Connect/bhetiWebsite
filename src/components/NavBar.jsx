import { useState } from 'react';
import styled from 'styled-components'
import Button from './Button';
import theLogo from '../assets/images/logo.png';
import { useTheme } from '../context/themeContext';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    // const navRef = useRef();
    const [etat, setEtat] = useState({clicked: false});

    // const showNavbar = () => {
    //     navRef.current.classList.toggle("responsive_nav");
    // }
    const handleClick = () => {
        setEtat({clicked: !etat.clicked})
    }

    const theme = useTheme();
    return (
        <NavBarStyled theme={theme}>
            <div className='hero'>
                <div className='logo'>
                        <NavLink to='/bhetiConnectProj'>
                            <img
                                src={theLogo}
                                className='theLogo'
                                alt='Le logo'
                            />
                        </NavLink>
                </div>
                <nav  className='navigation navbar'>
                        <div className={etat.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <NavLink
                                to='/entrepreneur'
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                                Entrepreneur
                            </NavLink>
                            <NavLink
                                to='/investisseur'
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                                Investisseur
                            </NavLink>
                            <a href='https://bheticonnect.super.site/'>
                                <NavLink
                                    to=''
                                    className={({ isActive }) => (isActive ? 'link active' : 'link')}
                                >
                                    Média 
                                </NavLink>
                            </a>
                            <NavLink
                                to='/connexion'
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                                Connexion
                            </NavLink>
                            <div className=' nav-btn-container'>
                                <a href='https://airtable.com/shrxZL75lICeCINRm'>
                                    <Button 
                                        name={'Parler à un expert'}
                                        icon={'fas fa-chevron-right'}
                                        arrow={'arrow'}
                                        blob={'blob'}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='menu-icon' onClick={handleClick}> 
                            <i className={etat.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered'}></i>
                        </div>
                    </nav>
            </div>
        </NavBarStyled>
    )
}

const NavBarStyled = styled.nav`

.hero{
    display: flex;
	justify-content: space-between;
	height: 80px;
	padding: 0 2rem;
    .logo{
            display: flex;
            align-items: center;
            animation: navHide 1s ease-in-out;
            animation-delay: 0.2s;
            visibility: hidden;
            animation-fill-mode: forwards;
            .theLogo{
                margin-top: 10%;
                width: 70%;
                @media only screen and (max-width: 425px) and (min-width: 320px) {
                    width: 100%;
                    margin-left: -20px;
                }
            }
}

.navigation {
        display: flex;
        grid-template-columns: 100px 1fr auto;
        padding: 1rem  2rem;
        align-items: center;
        flex-wrap: wrap;
        
        justify-content: space-between;
        border-bottom: 1px solid ${props => props.theme.colorGrey9};
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
            grid-template-columns: repeat(5, auto);
            grid-gap: 10px;
            text-align: center;
            width: 70vw;
            justify-content: end;
            margin-right: .2rem;
            @media only screen and (min-width: 768px) {
                display: grid;
                justify-content: space-around;
            }
        }
        .menu-icon {
            display: flex;
            .fa-bars-staggered {
                color: ${props => props.theme.colorBlack};
                margin-left: -29px;
                margin-top: 7%;
                @media only screen and (min-width: 900px) {
                    visibility: hidden;
                }
            }
        }
        }
        .nav-btn-container{
            right: auto;
        }
}
    .navbar {
    width: 100vw;
    max-width: 1480px;
    margin: 0 auto;
    .link {
    display: inline-block;
    margin: .9px 0px;
    color: ${props => props.theme.colorGrey} ;
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
}


@media only screen and (max-width: 768px){
    .navigation {
        position: relative;
        border-bottom: none;
        width: 80vw;
        margin-left: 0px;
        .nav-menu{
            list-style: none;
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            margin: auto;
            padding: 0;

            .link{
                text-align: center;
                padding: 2rem;
                width: 100%;
                display: table;
                color: ${props => props.theme.colorWhite};
            }
            .link:hover{
                background-color: ${props => props.theme.colorBheti} ;
                border-radius: 0;
            }
        }
        .nav-menu.active {
            background: #641E16;
            width: 190%;
            left: -300px;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 3;
        }
        .nav-btn-container{
            margin-left: 90px;
        }
        
    }
    .menu-icon {
            position: absolute;
            display: none;
            top: 2px;
            right: 0;
            transform: translate(-100%, 100%);
            font-size: 1.8rem;
            cursor: pointer;
            .fa-xmark{
                color: ${props => props.theme.colorBlack};
                font-size: 1.9rem;
            }
        }
}

@media only screen and (max-width: 425px) {
    .logo{
        width: 300px;
    }
    .navigation{
        .nav-menu{
            display: flex;
            flex-direction: column;
            height: 400px;
            position: absolute;
            top:  80px;
            left: -500%;
            opacity: 1;
            transition: all 0.7s ease;

            .link{
                text-align: center;
                padding: 2rem;
                width: 100%;
                display: table;
                color: ${props => props.theme.colorWhite};
            }
            .link:hover{
                background-color: ${props => props.theme.colorBheti} ;
                border-radius: 0;
            }
        }
        .nav-menu.active {
            background: #641E16;
            width: 200%;
            left: -162px;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 3;
        }
    }
    .menu-icon {
            position: absolute;
            display: none;
            top: 2px;
            right: 0;
            transform: translate(-100%, 100%);
            font-size: 1.8rem;
            cursor: pointer;
            .fa-xmark{
                color: ${props => props.theme.colorBlack};
                font-size: 2.1rem;
                margin-left: -19px;
                margin-top: -3px;
            }
        }
}

`;

export default NavBar