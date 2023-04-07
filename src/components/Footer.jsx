import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { useTheme } from '../context/themeContext';
import footerLogo from '../assets/images/footer-logo.png'


const Footer = () => {
    const theme = useTheme();
    return (
        <FooterSectionStyled theme={theme}>
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
                        <a href='https://www.linkedin.com/company/bheti-connect'><FontAwesomeIcon icon={faLinkedin} className='icon icon-linkedin' /></a>
                        <a href='https://web.facebook.com/bheticonnect'><FontAwesomeIcon icon={faFacebook} className='icon icon-facebook' /></a>
                        <a href='https://www.instagram.com/bheticonnect/'><FontAwesomeIcon icon={faInstagram} className='icon icon-instagram'/></a>
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
                    <li className="nav-item">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="f-text">
                            <h6>Adresse</h6>
                            <span>
                            78 Avenue des Champs-Elysée 75008 Paris, France
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
    font-size: 14px;
    h6{
        font-size: 1.1rem;
    }
    h4{
        font-size: 1.3rem;
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
        margin: auto;
        h4{
            padding-bottom: 1.5rem;
        }
        .nav-b{
            margin: 0 1.5rem;
            .nav-item{
                margin-bottom: 1rem;
            }
            @media only screen and (max-width: 525px) and (min-width: 320px){
                margin-top: 25px;
            }
        }
        .company {
            .nav-item a{
                color: ${props => props.theme.colorGrey6};
                @media all and (max-width: 425px) {
                    margin-left: -5px;
                }
                @media all and (max-width: 320px) {
                    margin-left: -1px;
                }
            }
        }
        .nav-contact{
            .nav-item{
                display: grid;
                grid-template-columns: 30px auto;
                color: ${props => props.theme.colorGrey6};
                @media all and (max-width: 420px) {
                margin-left: -5px;
                }
            }
        }
        .logo-con{
            flex: 5;
            .logo img{
                width: 12%;
                @media all and (max-width: 425px) {
                    width: 22%;
                }
            }
    }
        .logo-con p{
            color: ${props => props.theme.colorGrey6};
        }
        .b-nav-icons{
            display: flex;
            margin-top: 2rem;
            .icon {
                color: aliceblue;
                margin-left: .5rem;
                width: 1rem;
            }
            .icon-linkedin{
                :hover{
                    color: #2677b5;
                }
            }
            .icon-facebook{
                :hover{
                    color: #2872e7 ;
                }
            } 
            .icon-instagram{
                :hover{
                    color: #a9388b ;
                }
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
        @media all and (max-width: 2500px){
            width: 1200px;
        }
        @media all and (max-width: 1500px){
            width: 1000px ;
        }
        @media all and (max-width: 1080px){
            width: 850px;
        }
        @media all and (max-width: 1024px) {
            width: 680px;
        }
        @media all and (max-width: 768px) {
            width: 600px;
        }
        @media all and (max-width: 500px) {
            width: 350px;
            margin-left: 50px;
        }
        @media all and (max-width: 425px) {
            width: 280px;
            margin-left: 80px;
        }
        @media all and (max-width: 375px) {
            width: 250px;
        }
        @media all and (max-width: 320px) {
            width: 230px;
            margin-left: 55px;
        }
    }
    .footer-copyright{
        padding-top: 3rem;
        border-top: 1px solid ${props => props.theme.colorGrey9};
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
        text-align: center;
        color: ${props => props.theme.colorGrey6} ;
    }
    @media all and (max-width: 768px) {
        margin-left: 0px;
    }
    @media all and (max-width: 420px) {
        margin-left: -10px;
    }
`;

export default Footer