import React from 'react';
import styled from 'styled-components'
import Button from './Button';
import theLogo from '../assets/images/logo.png';
import { useTheme } from '../context/themeContext';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    const theme = useTheme();
    return (
        <NavBarStyled theme={theme}>
            <div className='hero'>
            <nav className='navigation navbar'>
                <div className='logo'>
                    <NavLink to='/bhetiConnectProj'>
                    <img
                        src={theLogo}
                        className='theLogo'
                        alt='Le logo'
                    />
                    </NavLink>
                </div>
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
                <NavLink
                    to='/media'
                    className={({ isActive }) => (isActive ? 'link active' : 'link')}
                >
                    Média
                </NavLink>
                <NavLink
                    to='/connexion'
                    className='link link-connect'
                >
                    Connexion
                </NavLink>
                    <div className='nav-btn-container'>
                        <Button 
                            name={'Parler à un expert'}
                            icon={'fas fa-chevron-right'}
                            arrow={'arrow'}
                            blob={'blob'}
                        />
                    </div>
                </nav>
            </div>
        </NavBarStyled>
    )
}


const NavBarStyled = styled.nav`

.navigation {
        display: flex;
        grid-template-columns: 100px 1fr auto;
        padding: 1rem  2rem;
        align-items: center;
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
        .logo{
            display: flex;
            align-items: center;
            animation: navHide 1s ease-in-out;
            animation-delay: 0.2s;
            visibility: hidden;
            animation-fill-mode: forwards;
            .theLogo{
                width: 55%;
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
    margin: 1px 0px;
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
        
}

`;
export default NavBar