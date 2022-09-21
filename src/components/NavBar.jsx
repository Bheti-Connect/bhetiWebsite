import { useRef } from 'react';
import styled from 'styled-components'
import { FaBars, FaTimes} from 'react-icons/fa'
import Button from './Button';
import theLogo from '../assets/images/logo.png';
import { useTheme } from '../context/themeContext';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
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
            <nav ref={navRef} className='navigation navbar'>
                
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
                    <div className='nav-btn-container'>
                            <a href='https://airtable.com/shrxZL75lICeCINRm'>
                                <Button 
                                    name={'Parler à un expert'}
                                    icon={'fas fa-chevron-right'}
                                    arrow={'arrow'}
                                    blob={'blob'}
                                />
                            </a>
                    </div>
                
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars />
                </button>
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
	background-color: var(--mainColor);
	color: var(--textColor);
    .responsive_nav {
		transform: none;
	}
        .responsive_nav{
        transform: none;
    }
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
        
        }

        .nav-btn-container{
            right: auto;
        }
        .nav-btn {
        padding: 5px;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        color: #000000 ;
        visibility: hidden;
        opacity: 0;
        font-size: 1.8rem;
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




@media only screen and (max-width: 800px) {
            .hero{
                .nav-btn {
                visibility: visible;
                opacity: 1;
	        }
            .responsive_nav {
		        transform: none;
	        }
            nav{
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
            background-color: #000000;
            transition: .8s;
            transform: translateY(-100vh);
            .nav-close-btn {
                position: absolute;
                top: 2rem;
                right: 2rem;
                color: #fff;
            }
        }

            }
            
            
    }

`;

export default NavBar