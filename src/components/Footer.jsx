import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeContext';
import footerLogo from '../assets/images/footer-logo.png'


const Footer = () => {
    const theme = useTheme();
    return (
        <FooterSectionStyled className='u-pad-lg-2' theme={theme}>
            <nav className="bottom-navigation">
                <ul className="logo-con">
                    <div className="logo">
                        <img src={footerLogo} alt="Footer Logo"/>
                        <h1>BHETI CONNECT</h1>
                    </div>
                    <p>
                        Préparez votre levée de fonds avec des contenus adaptés et présentez votre projet à des investisseurs pertinents
                    </p>
                    <div className="b-nav-icons">
                        <a href='https://www.linkedin.com/company/bheti-connect/'><i class="fab fa-linkedin"></i></a>
                        <a href='https://www.instagram.com/bheticonnect/'><i class="fab fa-instagram"></i></a>
                        <a href='https://web.facebook.com/bheticonnect/'><i class="fab fa-facebook"></i></a>
                    </div>
                </ul>
                <ul className="nav-b nav-contact">
                    <h4>Contactez-Nous</h4>
                    <li className="nav-item">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="f-text">
                            <h6>Email</h6>
                            <span>contact@bheticonnect.com</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="f-text">
                            <h6>Numéro de contact</h6>
                            <span> +33 (0) 123-456-789</span>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="f-text">
                            <h6>Adresse</h6>
                            <span>
                                22 Rue Bheti, Paris, France
                            </span>
                        </div>
                    </li>
                </ul>

                <ul className="nav-b company">
                    <h4>Compagnie</h4>
                    <li className="nav-item">
                        <a href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">F.A.Q</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Politique de remboursements</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Politique de confidentialité</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Licence & Droits d'auteur</a>
                    </li>
                </ul>

                {/* <ul className="nav-b ig">
                    <h4>LinkedIn</h4>
                    <div className="ig-images">
                        {/* <img src={team1} alt="" />
                        <img src={team2} alt="" />
                        <img src={css3} alt="" />
                        <img src={agency4} alt="" />
                        <img src={figma} alt="" />
                        <img src={fitness} alt="" /> 
                    </div>
                </ul> */}
            </nav>
            <div className="footer-copyright">
                <p>
                    Copyright © 2022 <span>Bheti Connect</span> All rights reserved.
                </p>
            </div>
        </FooterSectionStyled>
    
        )
}

const FooterSectionStyled = styled.footer`
    
    background-color: ${props => props.theme.colorBg3};
    padding-top: 6rem !important;
    color: ${props => props.theme.colorFont};
    padding-bottom: 3rem !important;
    
    h6{
        font-size: 1.2rem;
        
    }
    h4{
        font-size: 1.5rem;
        color: ${props => props.theme.colorGrey4};
    }
    a{  
        color: ${props => props.theme.colorGre6};
        transition: all 0.3s ease-in-out;
        margin-left: 2.5rem;
        &:hover{
            color: ${props => props.theme.colorBheti};
            text-decoration: underline;
        }
    }
    i{  
        color: ${props => props.theme.colorWhite};
        font-size: 1.3rem;
        transition: all 0.3s ease-in-out;
        &:hover{
            color: ${props => props.theme.colorBheti};
        }
    }
    h1{
        color: ${props => props.theme.colorWhite};
        margin-bottom: 1rem;
    }
    .bottom-navigation{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 3rem;
        h4{
            padding-bottom: 1.5rem;
        }
        .nav-b{
            margin: 0 1.5rem;
            .nav-item{
                margin-bottom: 1rem;
            }
        }
        .company {
            .nav-item a{
                color: ${props => props.theme.colorGrey6} ;
            }
        }
        .nav-contact{
            .nav-item{
                display: grid;
                grid-template-columns: 30px auto;
                color: ${props => props.theme.colorGrey6};
            }
        }
        .logo-con{
            flex: 5;
            .logo img{
                width: 12%;
            }
        }
        .logo-con p{
            color: ${props => props.theme.colorGrey6};
        }
        .b-nav-icons{
            display: flex;
            margin-top: 2rem;
            .fa-facebook{
                margin-right: .3rem;
            }
            i:not(:first-child){
                margin: 0 .5rem;
                cursor: pointer;
            }
        }
        /* .b-nav-icons a{
            color: ${props => props.theme.colorGre6};
        } */
        .ig{
            .ig-images{
                display: grid;
                grid-template-columns: repeat(3, 90px);
                grid-template-rows: repeat(2, 90px);
                grid-gap: .5rem;
                img{
                    width: 100%;
                    object-fit: cover;
                    height: 100%;
                    cursor: pointer;
                }
            }
        }
    }
    .footer-copyright{
        padding-top: 3rem;
        border-top: 1px solid ${props => props.theme.colorGrey9};
        text-align: center;
        span{
            color: ${props => props.theme.colorWhite};
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                color: ${props => props.theme.colorBheti};
            }
        }
    }
    .footer-copyright p{
        color: ${props => props.theme.colorGrey6} ;
    }

`;

export default Footer