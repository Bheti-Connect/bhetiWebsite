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


@media only screen and (max-width: 768px) and (min-width: 320px){

    .navigation {
        background: ${props => props.theme.colorBlack};
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }

    .logo{
        margin-left: -10px;
        width: 120%;
    }
}
`;

export default NavBar